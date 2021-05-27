/*
  路由配置
*/
import Vue from 'vue'
import Router from 'vue-router'
//路由组件
import Msite from '../pages/Msite'
import Search from '../pages/Search'
import Profile from '../pages/Profile'
import Order from '../pages/Order'
import Login from '../pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooter: true
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]
})
