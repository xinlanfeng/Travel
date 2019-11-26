//XX.vue -- 单文件组件

//组件的模板
<template>
  <div id="app">
    <!-- router-view显示的是当前路由地址所对应的内容 -->
    <router-view />
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
