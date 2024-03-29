import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import localizeFilter from '@/filters/localize.filter'
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import titlePlugin from '@/utils/title.plugin'
import Loader from '@/components/app/Loader'
import Sort from '@/components/app/Sort'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/functions'

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(titlePlugin);
Vue.use(Vuelidate);
Vue.use(VueMeta);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.filter('localize', localizeFilter);
Vue.directive('tooltip', tooltipDirective);
Vue.component('Loader', Loader);
Vue.component('paginate', Paginate);
Vue.component('sort', Sort);

firebase.initializeApp({
  apiKey: "AIzaSyBvjq4Mfy33_iwFNo5x-2GsCSr7wx3iEi8",
  authDomain: "vue-h-a-crm.firebaseapp.com",
  databaseURL: "https://vue-h-a-crm.firebaseio.com",
  projectId: "vue-h-a-crm",
  storageBucket: "vue-h-a-crm.appspot.com",
  messagingSenderId: "261082134",
  appId: "1:261082134:web:8eb7bf05a7cdadb9583937",
  measurementId: "G-6TDBHG0KDB"
});

let app;

firebase.auth().onAuthStateChanged(()=> {
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }

});

