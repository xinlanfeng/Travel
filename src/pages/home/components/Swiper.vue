<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgUrl" class="swiper-img" alt="去哪儿门票" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数

        // 显示控制轮播图的小圆点
        pagination: '.swiper-pagination',
        // 让图片可以轮播
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/a26b3b23c19843d8d8ab924c79b2c98a.jpg_750x200_f6286afb.jpg'
        },
        {
          id: '0002',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/0885dc58d87b07dff553140a1dd26a36.jpg_750x200_d7105b0b.jpg'
        },
        {
          id: '0003',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/e7eac5a5e99e6517c61b953c0fece63b.jpg_750x200_4b701cf8.jpg'
        },
        {
          id: '0004',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/14c86b17f55e4b639776b497178f8ef7.jpg_750x200_0d6b121a.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
// 让轮播图小按钮的颜色为白色
// >>> 表示让样式进行穿透，不受scoped的限制，只要是 .wrapper下面的 .swiper-pagination-bullet-active样式，样式就作相应改变
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

// 解决用户网速慢加载慢时，文字比图片先展示出来造成的屏幕抖动
.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  // 轮播图片的height/width比例：
  padding-bottom: 26.67%;
  background-color: #eee;
}

.swiper-img {
  width: 100%;
}
</style>
