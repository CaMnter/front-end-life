/* eslint-disable */

import Vue from 'vue';
import App from './app.vue';

// import Vconsole from 'vconsole';
// new Vconsole();


Vue.config.devtools = true;
Vue.config.productionTip = false;

var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj,
  created: function () { },
  beforeCreate: () => { },
  render: h => {
    let a = h(App);
    console.log('VNode', a);
    return a
  },
}).$mount('#app');