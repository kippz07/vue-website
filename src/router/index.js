import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Android from '@/components/Android'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/android',
      name: 'android',
      component: Android
    }
  ]
})
