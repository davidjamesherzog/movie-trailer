import Vue from 'vue';
import AppLayout from './views/Layout.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(AppLayout)
}).$mount('#app');
