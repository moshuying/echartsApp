import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      name: '/Home',
      component:()=> import('./views/main/ViewHome.vue'),
      children:[
        {
          path:'',
          name:'/Line',
          component:()=>import('./views/ViewLine.vue'),
        },
        {
          path:'Bar',
          name:'/Bar',
          component:()=>import('./views/ViewBar.vue'),
        },
        {
          path:'Pie',
          name:'/Pie',
          component:()=>import('./views/ViewPie.vue'),
        }
      ]
    },
    {
      path:'Rake',
      name:'/Rake',
      component:()=>import('./views/main/ViewRake.vue'),
    },
    {
      path:'News',
      name:'/News',
      component:()=>import('./views/main/ViewNews.vue')
    },
    {
      path:'User',
      name:'/User',
      component:()=>import('./views/main/ViewUser.vue')
    }
  ]
})
