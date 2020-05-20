<template>
  <div>
    <div class="page-title">
      <h3>{{'ProfileTitle' | localize}}</h3>
    </div>

    <form class="form" @submit.prevent="submitHandler">
      <div class="input-field">
        <input id="description"
               type="text"
               v-model="name"
               :class="{invalid: $v.name.$dirty && !$v.name.required}">
        <label for="description">{{'Name' | localize}}</label>
        <small class="helper-text invalid"
               v-if="$v.name.$dirty && !$v.name.required">
          {{'Message_EnterName' | localize}}
        </small>
      </div>
      <div class="input-field" v-if="!records.length">
        <input id="bill"
               type="number"
               v-model.number="bill"
               :class="{invalid: $v.bill.$dirty && !$v.bill.required||($v.bill.$dirty && !$v.bill.minValue)}">
        <label for="bill">{{'Menu_Bill' | localize}}</label>
        <small class="helper-text invalid"
               v-if="$v.bill.$dirty && !$v.bill.required">
          {{'Message_EmptyField'|localize}}
        </small>
        <small class="helper-text invalid"
               v-else-if="$v.bill.$dirty && !$v.bill.minValue">
          {{'Message_MinValue'|localize}} {{$v.bill.$params.minValue.min}}
        </small>
      </div>
      <div class="switch">
        <label>
          English
          <input type="checkbox" v-model="isRuLocale">
          <span class="lever"></span>
          Русский
        </label>
      </div>
      <button class="btn waves-effect waves-light" type="submit">
        {{'Update' | localize}}
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  import {required, minValue} from 'vuelidate/lib/validators';
  import localizeFilter from '@/filters/localize.filter';

  export default {
    name: "Profile",
    metaInfo() {
      return {title: this.$title('ProfileTitle')}
    },
    data() {
      return {
        name: '',
        isRuLocale: true,
        bill: null,
        records: [],
      }
    },
    computed: {
      ...mapGetters(['info'])
    },
    validations() {
      return {
        name: {required},
        bill: {required, minValue: minValue(100)}
      }

    },
    methods: {
      ...mapActions(['updateInfo']),

      async submitHandler() {
        if (this.$v.$invalid) {
          this.$v.$touch();
          return
        }
        try {
          await this.updateInfo({
            name: this.name,
            bill: this.bill,
            locale: this.isRuLocale ? 'ru-RU' : 'en-US'
          });
          this.$message(localizeFilter('ProfileHasBeenUpdated'));
        } catch (e) {
        }
      }
    },
    async mounted() {
      this.name = this.info.name;
      this.isRuLocale = this.info.locale === 'ru-RU';
      this.bill = this.info.bill;
      this.records = await this.$store.dispatch('fetchRecords');
      setTimeout(() => {
        M.updateTextFields();
      }, 0);

    }
  }
</script>

<style scoped>
  .switch {
    margin-bottom: 2rem;
  }
</style>