import Vue from 'vue'
import Router from 'vue-router'
// @符号指代src目录
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    // 通过 '/detail/:id'的形式添加了一个动态路由
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }],
  // 解决：进行页面滚动时，不同页面之间会相互影响（上一页面的滚动结果持续到下一页面）的问题
  scrollBehavior (to, from, savedPosition) {
    // 使页面进行切换后，始终回到最顶部
    return {
      x: 0,
      y: 0
    }
  }
})
