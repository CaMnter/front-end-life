import Vue from 'vue';
import App from './app.vue';

// import Vconsole from 'vconsole';
// new Vconsole();

Vue.config.devtools = true;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  data: {
    title: '页面加载于 ' + new Date().toLocaleString(),
    content: '鼠标悬停几秒钟查看此处动态绑定的提示信息！'
  },
  created: function () {
  },
  render: h => {
    return h(App)
  },
}).$mount('#app');