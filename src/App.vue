//XX.vue -- 单文件组件

//组件的模板
<template>
  <div id="app">
    <!-- keep-alive是vue自带的 -- 用于优化网页性能 -- 避免重复请求已经请求过的资源 -->
    <!-- keep-alive的作用：当路由的内容已经加载过后，就把这些内容放到内存之中，下次再需要使用时就不需要再次加载了 -->
    <!-- exclude表示除了Detail页面都会被缓存， 和activated可以实现相同效果 -->
    <keep-alive exclude="Detail">
      <!-- router-view显示的是当前路由地址所对应的内容 -->
      <router-view />
    </keep-alive>
  </div>
</template>

//组件的逻辑
<script>
export default {
  name: 'app'
}
</script>

//组件的样式
<style></style>
