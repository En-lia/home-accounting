<template>
  <div class="planning">
    <div class="page-title">
      <h3>{{'Menu_Planning'|localize}}</h3>
      <h4>{{info.bill | currency('RUB')}}</h4>
    </div>
    <loader v-if="loading"/>
    <p class="center" v-else-if="!categories.length">
      {{'Categories_NoCat'|localize}}.
      <router-link to="/categories">{{'AddFirst'|localize}}</router-link>
    </p>
    <section v-else>
      <ul class="collapsible">
        <li :class="{'active': date.isActive}" v-for="date of dateSections">
          <div class="collapsible-header" @click="showCategories(date)"><i class="material-icons">date_range</i>
            {{date.name}}
          </div>
          <div class="collapsible-body">
            <div v-for="cat of categories" :key="cat.id">
              <p v-if="cat.months[date.value]">
                <strong>{{cat.title}}:</strong>
                {{cat.months[date.value].spend|currency}} {{'Of'|localize}} {{cat.limit|currency}}
              </p>
              <div v-if="cat.months[date.value]" class="progress" v-tooltip.noloc="cat.months[date.value].tooltip">
                <div class="determinate"
                     :class="[cat.months[date.value].progressColor]"
                     :style="{width: `${cat.months[date.value].progressPercent}%`}"></div>
              </div>
            </div>
          </div>
        </li>
      </ul>


    </section>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import currencyFilter from '@/filters/currency.filter';
  import localizeFilter from '@/filters/localize.filter';
  import {getDateString, sortData} from '@/helpers';
  import _ from 'lodash';

  export default {
    name: "Planning",
    metaInfo() {
      return {title: this.$title('Menu_Planning')}
    },
    data() {
      return {
        loading: true,
        categories: [],
        dateSections: [],
      }
    },
    computed: {
      ...mapGetters(['info'])
    },
    methods: {
      showCategories(currentDate) {
        this.dateSections.map(date => {
          if (date.value === currentDate.value && currentDate.isActive) {
            date.isActive = false;
          } else {
            date.isActive = date.value === currentDate.value;
          }
        })
      }
    },
    async mounted() {
      const records = sortData(await this.$store.dispatch('fetchRecords'), {
        key: 'date',
        type: 'date',
        sort: 'up-down'
      });
      const categories = await this.$store.dispatch('fetchCategories');
      if (records.length > 0) {
        this.dateSections = _.uniq(records.map(rec => {
          return rec.dateSection;
        })).filter(s => s).map(sec => {
          return {
            name: getDateString(sec),
            value: sec,
            isActive: false,
          }
        });
        this.dateSections[0]['isActive'] = true;

      }
      if (categories.length > 0) {
        this.categories = categories.map(cat => {
          let months = {};
          if (cat.months) {
            cat.months.map((month) => {
              const spend = records
                  .filter(r => r.categoryId === cat.id)
                  .filter(r => r.dateSection === month)
                  .filter(r => r.type === 'outcome')
                  .reduce((sum, record) => {
                    return sum += +record.amount
                  }, 0);
              const percent = 100 * spend / cat.limit;
              const progressPercent = percent > 100 ? 100 : percent;
              const progressColor = percent < 60
                  ? 'green'
                  : percent < 100
                      ? 'yellow'
                      : 'red';
              const tooltipValue = cat.limit - spend;
              const tooltip = `${tooltipValue < 0 ? localizeFilter('MoreThan') : localizeFilter('Stayed')} ${currencyFilter(Math.abs(tooltipValue))}`;
              months[month] = {
                spend,
                progressPercent,
                progressColor,
                tooltip
              }

            });
          }
          return {
            ...cat,
            months,
          }
        });
      }
      this.loading = false;
    }
  }

</script>

<style lang="scss">
  .planning {
    & .collapsible {
      & .active .collapsible-body {
        display: block;
      }
    }

    & .collapsible-body {
      padding: 10px 60px;
    }
  }
</style>