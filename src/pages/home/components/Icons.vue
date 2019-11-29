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
  data () {
    return {
      swiperOption: {
        autoplay: false,
        pagination: '.swiper-pagination'
      },
      iconList: [
        {
          id: '0001',
          imgUrl:
            'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        },
        {
          id: '0002',
          imgUrl:
            'https://imgs.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
          desc: '情迷九寨'
        },
        {
          id: '0003',
          imgUrl:
            'https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
          desc: '故宫'
        },
        {
          id: '0004',
          imgUrl:
            'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          desc: '一日游'
        },
        {
          id: '0005',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
          desc: '欢乐谷'
        },
        {
          id: '0006',
          imgUrl:
            'https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
          desc: '泡温泉'
        },
        {
          id: '0007',
          imgUrl:
            'https://imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
          desc: '野生动物园'
        },
        {
          id: '0008',
          imgUrl:
            'https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
          desc: '芙蓉园'
        },
        {
          id: '0009',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/b34a13fd372f5ce8cb2c954ffe25622d.png',
          desc: '马上游'
        },
        {
          id: '0010',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/f04285731d7121da1b9028e2bf431695.png',
          desc: '都江堰'
        }
      ]
    }
  },
  computed: {
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
