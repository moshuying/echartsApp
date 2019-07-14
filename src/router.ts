import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component:()=> import('./views/main/ViewHome.vue'),
      children:[
        {
          path:'',
          component:()=>import('./views/charts/ViewBar.vue'),
        },
        {
          path:'/Home/Line',
          name:'/Line',
          component:()=>import('./views/charts/ViewLine.vue'),
        },
        {
          path:'/Home/Bar',
          name:'/Bar',
          component:()=>import('./views/charts/ViewBar.vue'),
        },
        {
          path:'/Home/Pie',
          name:'/Pie',
          component:()=>import('./views/charts/ViewPie.vue'),
        },
        {
          path:'/Home/navMap',
          name:'/navMap',
          component:()=>import('./views/map/navMap.vue'),
        }
      ]
    },
    {
      path:'/',
      name:'/Home',
      component:()=>import('./views/main/ViewHome.vue'),
    },
    {
      path:'/Rake',
      name:'/Rake',
      component:()=>import('./views/main/ViewRake.vue'),
    },
    {
      path:'/News',
      name:'/News',
      component:()=>import('./views/main/ViewNews.vue')
    },
    {
      path:'/User',
      name:'/User',
      component:()=>import('./views/main/ViewUser.vue')
    }
  ]
})
