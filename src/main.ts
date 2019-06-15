import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
Vue.config.productionTip = false;

//图表
let echarts = require('echarts/lib/echarts');
// 引入折线图等组件
require('echarts/lib/chart/line');
require('echarts/lib/chart/bar');
require('echarts/lib/chart/radar');
// 引入提示框和title组件，图例
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');
require('echarts/lib/component/legendScroll');//图例翻译滚动
Vue.prototype.$echarts = echarts;
//异步
import axios from 'axios'
import Qs from 'qs';
Vue.prototype.$axios=axios;
//jq
import $ from 'jquery'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
