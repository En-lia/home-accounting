<template>
  <div class="history">
    <div class="page-title">
      <h3>{{'History_Title'|localize}}</h3>
    </div>
    <div class="top-content">
      <div class="chart-history" id="chart"></div>
    </div>
    <loader v-if="loading"/>
    <p class="center" v-else-if="!records.length">
      {{'NoRecords'|localize}}.
      <router-link to="/record">{{'AddFirst'|localize}}</router-link>
    </p>
    <section v-else>
      <history-search :categories="categories"
                      @search="searchRecords"
                      class="history-search"
      />
      <div class="input-field month-select">
        <select ref="month" v-model="currentMonth" :key="currentMonth">
          <option :value="null">{{'ChoosePeriod'|localize}}</option>
          <option v-for="s in dateSections"
                  :key="s.value"
                  :value="s.value">
            {{s.name}}
          </option>
        </select>
      </div>
      <history-table :records="items"
                     :page="page"
                     :page-size="pageSize"
                     :loader="tableLoader"
                     @update="updateRecords"
                     @sort="sort"/>
      <paginate v-model="page"
                :page-count="pageCount"
                :click-handler="pageChangeHandler"
                :prev-text="items.length? '<' : ''"
                :next-text="items.length? '>' : ''"
                :container-class="'pagination'"
                :page-class="'waves-effect'"/>
    </section>
  </div>
</template>

<script>
  import paginationMixin from '@/mixins/pagination.mixin';
  import {sortTableData, dateToString, createDate, getDateString} from '@/helpers'
  import localizeFilter from '@/filters/localize.filter';
  import _ from 'lodash';
  import * as am4core from "@amcharts/amcharts4/core";
  import * as am4charts from "@amcharts/amcharts4/charts";
  import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
  import am4themes_animated from "@amcharts/amcharts4/themes/animated";


  export default {
    name: "History",
    mixins: [paginationMixin],
    metaInfo() {
      return {title: this.$title('Menu_History')}
    },
    data() {
      return {
        loading: true,
        tableLoader: false,
        records: [],
        tableRecords: [],
        categories: [],
        showSearchPanel: false,
        dateSections: [],
        currentMonth: null,
        selectSection: null,
        chart: null,
        isSearching: false,
      }
    },
    components: {
      HistoryTable: () => import('@/components/HistoryTable'),
      HistorySearch: () => import('@/components/HistorySearch'),
    },
    watch: {
      '$route'(to, from) {
        if (!to.query.page) {
          this.pageChangeHandler(1);
          this.page = 1;
        }
      },
      async currentMonth(val) {
        if (this.isSearching) return;
        await this.getRecordsByMonth(val);
      }
    },
    computed: {
      chartDate() {
        return this.currentMonth
            ? getDateString(this.currentMonth)
            : `${getDateString(this.dateSections[this.dateSections.length - 1].value)} - ${getDateString(this.dateSections[0].value)}`;
      }
    },
    methods: {
      async getRecordsByMonth(date) {
        this.tableLoader = true;
        if (!date) {
          this.setup();
          return
        }
        this.records = sortTableData(await this.$store.dispatch('fetchRecordsByMonth', date), {
          key: 'date',
          type: 'date',
          sort: 'up-down'
        });
        this.tableRecords = this.records.map(record => {
          return {
            ...record,
            categoryName: this.categories.find(c => c.id === record.categoryId).title,
            typeClass: record.type === 'income' ? 'green' : 'red',
            typeText: record.type === 'income' ? localizeFilter('Income') : localizeFilter('Outcome'),
          }
        });
        this.setupPagination(this.tableRecords);
        this.chartInit();
        if (!this.isSearching) this.tableLoader = false;
      },
      async searchRecords({amount, category, type, date}) {
        this.tableLoader = true;
        this.isSearching = true;
        if (date) {
          this.currentMonth = createDate(date);
          await this.getRecordsByMonth(this.currentMonth);
          const idx = this.dateSections.findIndex(el => el.value === createDate(date));
          this.selectSection.dropdownOptions.children[idx + 1].click();
        } else {
          this.currentMonth = null;
          await this.setup();
        }

        this.setupPagination(this.tableRecords.filter(rec => {
          return (amount ? rec.amount === amount : true)
              && (category ? rec.categoryId === category : true)
              && (type ? rec.type === type : true)
              && (date ? dateToString(rec.date) === dateToString(date) : true)
        }));
        this.isSearching = false;
        this.tableLoader = false;
      },
      sort(options) {
        this.setupPagination(sortTableData(this.tableRecords, options));
      },

      async updateRecords() {
        this.setup();
      },

      async setup() {
        this.records = sortTableData(await this.$store.dispatch('fetchRecords'), {
          key: 'date',
          type: 'date',
          sort: 'up-down'
        });
        if (this.records.length > 0) {
          this.dateSections = await _.uniq(this.records.map(rec => {
            return rec.dateSection;
          })).filter(s => s).map(sec => {
            return {
              name: getDateString(sec),
              value: sec
            }
          });
          this.tableRecords = this.records.map(record => {
            return {
              ...record,
              categoryName: this.categories.find(c => c.id === record.categoryId).title,
              typeClass: record.type === 'income' ? 'green' : 'red',
              typeText: record.type === 'income' ? localizeFilter('Income') : localizeFilter('Outcome'),
            }
          });
          this.setupPagination(this.tableRecords);

        }
        if (this.categories.length > 0 && this.categories.length > 0) {
          this.chartInit();
        }
        this.tableLoader = false;
        this.loading = false;
      },

      chartInit() {
        if (this.chart) this.chart.dispose();
        am4core.useTheme(am4themes_kelly);
        am4core.useTheme(am4themes_animated);
        this.chart = am4core.create("chart", am4charts.PieChart3D);
        this.chart.hiddenState.properties.opacity = 0;

        this.chart.legend = new am4charts.Legend();
        this.chart.data = this.categories.map(c => {
          let obj = {
            category: c.title,
            amount: null,
            income: null
          };
          obj.amount = this.records.reduce((total, r) => {
            if (r.categoryId === c.id && r.type === 'outcome') {
              total += +r.amount;
            }
            if (r.categoryId === c.id && r.type === 'income') {
              obj.income = +obj.income + r.amount;
            }
            return total;
          }, 0);
          if (!obj.amount || obj.income) return;
          return obj;
        }).filter(c => c);

        let series = this.chart.series.push(new am4charts.PieSeries3D());
        series.dataFields.value = "amount";
        series.dataFields.category = "categoryName";
        series.slices.template.tooltipText = "{category}: {value.formatNumber('#,###.00')}";
        if (document.documentElement.clientWidth < 600) series.labels.template.text = "{category}";

        let title = this.chart.titles.create();
        title.text = `${localizeFilter('CategoryOutcome')} ${this.chartDate}`;
        title.fontSize = document.documentElement.clientWidth < 600 ? 18 : 22;
        title.marginBottom = 30;
      },

    },
    async mounted() {
      this.categories = await this.$store.dispatch('fetchCategories');
      await this.setup();
      this.selectSection = M.FormSelect.init(this.$refs.month);
    },
    destroyed() {
      if (this.selectSection && this.selectSection.destroy) {
        this.selectSection.destroy()
      }
      if (this.chart) this.chart.dispose();
    }
  }
</script>

<style lang="scss">
  .select-history .caret {
    fill: rgba(0, 0, 0, 0.32);
  }

  .chart-history {
    width: 100%;
    height: 400px;
  }

  #chart.chart-history > div:nth-child(2) > svg > g > g:nth-child(2) > g:nth-child(2) > g > g:nth-child(3) {
    display: none;
  }

  #chart > div > svg > g > g:nth-child(2) > g:nth-child(2) > g > g:nth-child(3) {
    display: none;
  }

  .history {
    & .month-select {
      width: 200px;

      &.input-field {
        margin-top: 0;
      }
    }

    & .search-panel {
      & .input-field {
        margin-bottom: 0;
      }

      &.row {
        margin-bottom: 0;

        & .col:first-child {
          padding: 0;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .history {
      & .history-table {
        font-size: 9px;

        & span.badge {
          font-size: 9px;
        }
      }

      & .month-select {
        &.input-field {
          margin-top: 10px;
        }
      }

      & #modal1.modal {
        width: 80%;
      }
    }


  }

</style>