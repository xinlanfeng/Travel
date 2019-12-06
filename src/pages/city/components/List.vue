<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">您的位置</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button local">
              <!-- {{this.$store.state.city}} -->
              {{this.currentCity}}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="hotCity of hotCities"
            :key="hotCity.id"
            @click="handleCityClick(hotCity.name)"
          >
            <div class="button">{{hotCity.name}}</div>
          </div>
        </div>
      </div>
      <!-- 添加:ref="key"，以实现点击字母跳转到对应的城市 -->
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="city of item"
            :key="city.id"
            @click="handleCityClick(city.name)"
          >{{city.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      // vuex -- 组件中使用dispatch(事件名，参数)方法派发action
      // this.$store.dispatch('changeCity', city)

      // 不通过action调用
      // this.$store.commit('changeCity', city)

      // 通过vuex提供的更简单的mapMutations调用
      this.changeCity(city)

      // 选择某个城市后跳转到首页
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)

    // 非父子组件传值方式一: 使用bus
    // this.bus.$on('change', letter => {
    //   if (letter) {
    //     const element = this.$refs[letter][0]
    //     // better-scroll提供的接口 -- 让页面滚动到元素所在位置
    //     this.scroll.scrollToElement(element)
    //   }
    // })
  },
  // 通过watch监视letter的变化
  watch: {
    // 非父子组件传值方式二：通过一个中间组件 -- Alphabet组件传值给City组件，再通过City组件传值给List组件
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // better-scroll提供的接口 -- 让页面滚动到元素所在位置
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.title {
  height: 0.8rem;
  line-height: 0.8rem;
  background-color: #F5F5F5;
  padding-left: 0.2rem;
  color: #212121;
  font-size: 0.26rem;
}

.list {
  position: absolute;
  top: 1.68rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.button-list {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;

  .button-wrapper {
    float: left;
    width: 33.33%;

    .button {
      margin: 0.1rem;
      text-align: center;
      border: 0.02rem solid #ddd;
      padding: 0.14rem;
      border-radius: 0.06rem;
    }

    .local {
      border: 0.02rem solid $bgColor;
      color: $bgColor;
    }
  }
}

.item-list {
  .item {
    line-height: 0.76rem;
    padding-left: 0.2rem;
    color: #212121;
  }
}
</style>
