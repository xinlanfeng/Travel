<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span> 输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

// 添加scope属性，表示style下面写的所有样式只对当前组件有效，对其余组件无效
<style lang="stylus" scope>
// 引入styl文件
// 1. @import '../../../assets/styles/varibles.styl';

// 2. 或者使用 @ 符号 指代src目录，但在css中使用 别名，需要在前面加 ~
// @import '~@/assets/styles/varibles.styl';

// 3. 或者在 build/webpack.base.conf.js中给rc/assets/styles路径配置别名： 'styles': resolve('src/assets/styles') 注意：在css中使用 别名，需要在前面加 ~
@import '~styles/varibles.styl';

.header {
  display: flex;
  line-height: 0.86rem;
  background: $bgColor;
  color: #fff;

  .height-left {
    width: 0.64rem;
    float: left;
  }

  .back-icon {
    text-align: center;
    font-size: 0.4rem;
    padding-left: 0.1rem;
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
  }

  .arrow-icon {
    font-size: 0.24rem;
    margin-left: -0.04rem;
  }
}
</style>
