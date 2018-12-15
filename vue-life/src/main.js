import Vue from 'vue';
import App from './app.vue';

// import Vconsole from 'vconsole';
// new Vconsole();

Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  created: function () {},
  render: h => {
    return h(App)
  },
}).$mount('#app');