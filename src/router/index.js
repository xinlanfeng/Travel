import Vue from 'vue'
import Router from 'vue-router'
// @符号指代src目录
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }]
})
