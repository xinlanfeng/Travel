<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false,
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    // 实现多页icons轮播翻页效果
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

// 元素占位 -- 整块div元素的宽高比为2：1
.icons >>> .swiper-container {
  overflow: hidden;
  width: 100%;
  height: 0;
  // 增加icons这个div的高度，放置控制多页icon的小圆点
  padding-bottom: 58%;
  // background: #eee;
}

// 控制多页icons的小按钮的颜色
.icons >>> .swiper-pagination-bullet-active {
  background: $bgColor;
}

// 控制多页icons的小按钮距底部的距离
.swiper-pagination-bullets {
  bottom: 4px;
}

.icons {
  margin-top: 0.2rem;
}

.icon {
  position: relative;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
  overflow: hidden;
}

.icon-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.44rem;
  box-sizing: border-box;
  padding: 0.1rem;
}

.icon-img-content {
  height: 100%;
  display: block;
  margin: 0 auto;
}

.icon-desc {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  color: $darkText;
  ellipsis();
}
</style>
