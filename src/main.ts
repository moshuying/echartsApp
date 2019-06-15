import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false;

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

Vue.component('ecahrts',echarts);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
