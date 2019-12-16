<template>
  <ul class="list">
    <li
      class="item"
      :ref="item"
      v-for="item of letters"
      :key="item"
      @click="handleLetterClick"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
// import Vue from 'vue'
// Vue.prototype.bus = new Vue()

export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      // 节流
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      // 方式一：兄弟组件之间的传值（非父子组件之间的传值：bus） -- Alphabet组件的值传递给List组件
      // console.log(e.target.innerText)
      // this.bus.$emit('change', e.target.innerText)

      // 方式二：通过一个中间组件 -- Alphabet组件传值给City组件，再通过City组件传值给List组件
      this.$emit('selectCityLetter', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 节流 -- 控制handleTouchMove这个函数执行的次数 -- 提高网页性能
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 通过计算字母A到页面顶部的距离以及当前字母距离字母A的距离（每个字母宽高相同），来获得当前是拖动到哪一个字母
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)

          if (index >= 0 && index < this.letters.length) {
            this.$emit('selectCityLetter', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.68rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
