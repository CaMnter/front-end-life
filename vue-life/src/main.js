/* eslint-disable */

import Vue from 'vue';
import App from './app.vue';

// import Vconsole from 'vconsole';
// new Vconsole();


Vue.config.devtools = true;
Vue.config.productionTip = false;

var targetData = {
  foo: 'bar'
}

Object.freeze(targetData)

const vm = new Vue({
  el: '#app',
  data: targetData,
  created: function () {},
  beforeCreate: () => {},
  render: h => {
    let VNode = h(App);
    console.log('「main」「VNode」', VNode);
    return VNode
  },
}).$mount('#app');

// 获取 dom
const dom = vm.$el;
// 获取 data
const data = vm.$data;

console.log('「main」「dom」', dom);
console.log('「main」「data」', data);