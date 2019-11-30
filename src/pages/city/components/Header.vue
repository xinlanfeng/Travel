<template>
  <div class="header">
    <div class="header-title">城市选择</div>
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  position: relative;
  overflow: hidden;
  background: $bgColor;
  height: $headerHeight;
  line-height: $headerHeight;

  .header-title {
    position: absolute;
    left: 50%;
    margin-left: -0.64rem;
    text-align: center;
    color: #fff;
    font-size: 0.32rem;
  }

  .header-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    font-size: 0.4rem;
    color: #fff;
  }
}
</style>
