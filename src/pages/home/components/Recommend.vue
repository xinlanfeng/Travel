<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!-- border-bottom样式是最开始引入的1像素边框 -->
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1704/a5/a59677101e07d38a3.img.jpg_200x200_6064e939.jpg',
          title: '国色天乡·陆地乐园',
          desc:
            '放下手机，抛开工作，尽情享受这个夏天赋予我们的火热，以及天乡带给我们的清凉！'
        },
        {
          id: '0002',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1509/1d/e74e796e4e21275427ffdd838619f45f.water.jpg_200x200_d994e778.jpg',
          title: '成都欢乐谷',
          desc:
            '童年啊，是梦中的真，是真中的梦，是回忆时爸爸坚实的臂膀，妈妈温暖的脸庞'
        },
        {
          id: '0003',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
          title: '成都海昌极地海洋公园',
          desc:
            '以南北极动物科普、展示、互动、表演为主，涵盖休闲、度假、亲子互娱等多种领域的极地海洋主题公园，也是中国西南地区一个综合的专业性主题海洋公园'
        },
        {
          id: '0004',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1508/53/53c486532f848d71.img.jpg_200x200_c4be246c.jpg',
          title: '西岭雪山',
          desc:
            '西岭雪山从山脚下爬到日月坪大概要一天时间，这是在你身体条件不错的情况下，一天之内海拔高度上升2000多米，对普通人来说有点够呛'
        },
        {
          id: '0005',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1505/b0/b0132e78efa00572.water.jpg_200x200_3f499a59.jpg',
          title: '青城山',
          desc:
            '宫内有老君殿、三清殿、文武殿和道德经堂，香火旺盛，大多数游人至此都会烧香祈福'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
  margin-top: 0.2rem;
}

.item {
  display: flex;
  height: 1.9rem;
  overflow: hidden;
}

.item-img {
  width: 1.7rem;
  height: 1.7rem;
  padding: 0.1rem;
}

.item-info {
  flex: 1;
  padding: 0.1rem;
  // 让文字超出宽度后能正常的以...的形式显示在一行中
  min-width: 0;
}

.item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
  ellipsis();
}

.item-desc {
  line-height: 0.4rem;
  color: #ccc;
  ellipsis();
}

.item-button {
  background: #ff9300;
  padding: 0 0.2rem;
  border-radius: 0.06rem;
  margin-top: 0.16rem;
  color: #fff;
  line-height: 0.44rem;
}
</style>
