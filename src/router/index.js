import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import Message from '@/page/message/message'
import Search from '@/page/search/search'
import My from '@/page/my/my'
import Login from '@/page/login'
import Register from '@/page/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
