<template>
  <div class="history-search">
    <a class="btn-floating btn-large waves-effect waves-light search-btn"
       :class="{'pulse': !showSearchPanel, 'move': showSearchPanel}"
       @click="openSearchPanel">
      <i class="large material-icons">search</i>
    </a>
    <div class="search-panel row" :class="{'active': showSearchPanel}">
      <div class="col s12 m2 input-field">
        <input id="amount"
               type="number"
               v-model.number="filter.amount"
               :placeholder="amountPlaceholder">
      </div>
      <div class="col  s12 m3 input-field">
        <select ref="category" v-model="filter.category">
          <option :value="null">{{'ChooseCategory'|localize}}</option>
          <option v-for="c in categories"
                  :key="c.id"
                  :value="c.id">
            {{c.title}}
          </option>
        </select>
      </div>
      <div class="col  s12 m2 input-field">
        <select ref="type" v-model="filter.type">
          <option :value="null">{{'ChooseType'|localize}}</option>
          <option value="income">{{'Income'|localize}}</option>
          <option value="outcome">{{'Outcome'|localize}}</option>
        </select>
      </div>
      <div class="col  s12 m2 input-field">
        <input id="date"
               v-model.lazy="filter.date"
               class="datepicker"
               ref="datepicker"
               :placeholder="datePlaceholder">
      </div>
      <div class="col  s12 m2 input-field">
        <button class="btn waves-effect waves-light"
                @click="searchRecords">
          {{'Search'|localize}}
          <i class="material-icons right">search</i>
        </button>
      </div>
    </div>

  </div>
</template>

<script>
  import localizeFilter from '@/filters/localize.filter'

  export default {
    name: "HistorySearch",
    props: ['categories'],
    data() {
      return {
        filter: {
          amount: null,
          category: null,
          type: null,
          date: null,
        },
        amountPlaceholder: '',
        datePlaceholder: '',
        datepicker: null,
        selectCategory: null,
        selectType: null,
        showSearchPanel: false
      }
    },
    methods: {
      searchRecords() {
        this.$emit('search', this.filter)
      },
      clearSearch() {
        this.filter.amount = this.filter.category = this.filter.type = this.filter.date = null;
      },
      openSearchPanel() {
        this.showSearchPanel = !this.showSearchPanel
      },
      async datepickerInit() {
        const records = await this.$store.dispatch('fetchRecords');
        const sorted = records.sort((a, b) => {
          return new Date(a['date']).getTime() - new Date(b['date']).getTime();
        });
        const minDate = new Date(sorted[0]['date']);
        const maxDate = new Date(sorted[sorted.length - 1]['date']);
        this.datepicker = M.Datepicker.init(this.$refs.datepicker, {
          firstDay: 1,
          i18n: {
            months: [localizeFilter('month-1'),
              localizeFilter('month-2'),
              localizeFilter('month-3'),
              localizeFilter('month-4'),
              localizeFilter('month-5'),
              localizeFilter('month-6'),
              localizeFilter('month-7'),
              localizeFilter('month-8'),
              localizeFilter('month-9'),
              localizeFilter('month-10'),
              localizeFilter('month-11'),
              localizeFilter('month-12')],
          },
          minDate: minDate,
          maxDate: maxDate
        })
        ;
      }
    },


    async mounted() {
      this.amountPlaceholder = localizeFilter('Amount');
      this.typePlaceholder = localizeFilter('Type');
      this.datePlaceholder = localizeFilter('Date');
      this.datepickerInit();
      this.selectCategory = M.FormSelect.init(this.$refs.category, {classes: 'select-history'});
      this.selectType = M.FormSelect.init(this.$refs.type, {classes: 'select-history'});

    },
    destroyed() {
      if (this.datepicker && this.datepicker.destroy) {
        this.datepicker.destroy()
      }
      if (this.selectType && this.selectType.destroy) {
        this.selectType.destroy()
      }
      if (this.selectCategory && this.selectCategory.destroy) {
        this.selectCategory.destroy()
      }
    }
  }
</script>

<style lang="scss">
  .select-wrapper.select-history .caret {
    fill: rgba(0, 0, 0, 0.31);
  }

  .history-search {
    position: relative;


    &.row.col.s6 {
      right: 0;
    }

    &.row {
      margin-bottom: 0;
    }

    & .search-btn {
      position: absolute;
      transition: top .6s;
      top: 0;

      &.move {
        top: -45px;
        opacity: 0.6;

        &:hover {
          opacity: 1;
        }
      }
    }

    & .search-panel {
      opacity: 0;
      transition: opacity .6s;
      position: relative;

      &.active {
        opacity: 1;
      }
    }
  }

  @media (max-width: 600px) {
    .history-search {
      & .search-panel.row {
        margin-bottom: 0;
      }
      & .search-panel {
        display: none;
        &.row .col {
          padding: 0;
        }
        &.active {
          display: block;
          margin-bottom: 10px;
        }
      }
      & .search-btn {
        right: 0;
        top: -10px;
      }
    }
  }

</style>