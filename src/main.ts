import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
Vue.config.productionTip = false;
//echarts 绘图
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

//异步
import axios from 'axios'
import Qs from 'qs';
Vue.prototype.$axios=axios;

//jq
import $ from 'jquery';
Vue.prototype.$=$;

//全局变量
import $Global from '@/static/global/global_variable.ts';
Vue.prototype.$Global = $Global;

//引入阿里云图标
import './static/icon/font_batter/iconfont.css'

//引用公共css样式
import './static/scss/public.scss'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
