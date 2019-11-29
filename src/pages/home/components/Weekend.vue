<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <!-- border-bottom样式是最开始引入的1像素边框 -->
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'https://imgs.qunarzz.com/sight/source/1505/98/47e8d7bdbed162.jpg_r_640x214_f6059302.jpg',
          title: '有温泉就是任性',
          desc:
            '繁忙的一周结束，拖着疲惫的身体赶紧来泡个养生温泉吧，解除你的疲劳'
        },
        {
          id: '0002',
          imgUrl:
            'https://imgs.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
          title: '成都必打卡',
          desc: '成都的标志，也是现代人对老成都的记忆'
        },
        {
          id: '0003',
          imgUrl:
            'https://imgs.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
          title: '摩崖石刻造像',
          desc:
            '诸事不顺，来抱佛脚，中国最壮观的大佛大盘点~来一场真正的“佛”系之旅，乐山大佛是首选'
        },
        {
          id: '0004',
          imgUrl:
            'https://imgs.qunarzz.com/sight/source/1509/ff/4184c6c13edbb.jpg_r_640x214_60474b61.jpg',
          title: '成都周边秋色',
          desc: '细数成都周边秋天最美仙境'
        },
        {
          id: '0005',
          imgUrl:
            'https://imgs.qunarzz.com/sight/source/1507/a0/7087c85d439e4.jpg_r_640x214_4cd56a30.jpg',
          title: '远离烧烤模式',
          desc:
            '与冰川里的水晶宫、“摄影家走廊”、来一场亲密的约会，艰辛会有的，可这都是值得的'
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

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 38%;
}

.item-img {
  width: 100%;
}

.item-info {
  padding: 0.1rem;
}

.item-title {
  line-height: 0.54rem;
  font-size: 0.3rem;
  ellipsis();
}

.item-desc {
  line-height: 0.4rem;
  font-size: 0.24rem;
  ellipsis();
}
</style>
