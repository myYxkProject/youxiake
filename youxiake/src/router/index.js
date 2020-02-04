import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home/Home.vue'
import Order from 'views/Order/Order.vue'
import UserCenter from 'views/UserCenter/UserCenter.vue'
import Login from 'views/Login/Login.vue';
import {getItem} from 'utils/webStorage.js';
import Search from 'views/Search/Search.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/order',
    name:'order',
    component:Order,
    beforeEnter: (to, from, next) => {
      if(getItem('token')){
        next()
      }else{
        next('/login')
      }
    }
  },
  {
    path:'/userCenter',
    name:'userCenter',
    component:UserCenter
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/search',
    name:'search',
    component:Search
  }
]

const router = new VueRouter({
  routes
})

export default router
