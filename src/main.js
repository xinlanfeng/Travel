// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入Vuex
import store from './store/index'
// 引入vue-awesome-swiper相关模块
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 引入reset.css文件，保证所有不同类别的手机浏览器显示的页面是一致的，没有差别
import 'styles/reset.css'
// 解决：移动端的 1像素边框 问题 -- 引入border.css文件
import 'styles/border.css'
// 解决：移动端 点击事件有300ms延迟 问题 -- 引入fastclick库 npm install fastclick --save
import fastClick from 'fastclick'
// 引入iconfont.css文件 -- 因为各个页面都需要引入iconfont，所以直接在main.js中引入
import 'styles/iconfont.css'

Vue.config.productionTip = false
// 使用fastClick
fastClick.attach(document.body)
// 使用vue-awesome-swiper
Vue.use(VueAwesomeSwiper /* { default global options } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // es6的对象{}中，如果键和值一样，则可简写为 单个名称 的形式。例如： {a:a} 可简写为 {a}
  router,
  // 引入store -- vuex
  store,
  components: {
    App
  },
  template: '<App/>'
})

// 路由就是根据url的不同，返回不同的内容给用户
