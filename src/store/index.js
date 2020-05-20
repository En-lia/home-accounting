import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import category from './category'
import record from './record'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
    locale: 'ru-RU'
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    },
    updateLocale(state, lang) {
      state.locale = lang;
    }
  },
  getters: {
    error: s => s.error,
    locale: s => s.locale
  },
  actions: {
    async fetchCurrency() {
      const res = await fetch(`https://api.exchangeratesapi.io/latest?symbols=USD,RUB`);
      const currency =  await res.json();
      currency.rates['EUR'] = 1;
      return currency;
    }
  },
  modules: {
    auth,
    info,
    category,
    record
  }
})
