<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div v-show="keyword" class="search-content" ref="search">
      <ul>
        <li
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
          class="search-item border-bottom"
        >{{ item.name }}</li>
        <li v-show="hasNoData" class="search-item border-bottom search-nothing">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      // 节流
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleCityClick (city) {
      // vuex -- 组件中使用dispatch(事件名，参数)方法派发action
      // this.$store.dispatch('changeCity', city)

      // 不通过action调用
      this.$store.commit('changeCity', city)

      // 通过vuex提供的更简单的mapMutations调用
      this.changeCity(city)

      // 选择某个城市后跳转到首页
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }

      if (!this.keyword) {
        this.list = []
        return
      }

      // 节流
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: 0.72rem;
  padding: 0.1rem;
  background: $bgColor;

  .search-input {
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    border-radius: 0.06rem;
    text-align: center;
    color: #666;
    padding: 0 0.1rem;
    box-sizing: border-box;
  }
}

.search-content {
  position: absolute;
  overflow: hidden;
  top: 1.68rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #F5F5F5;
  z-index: 1;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    color: #212121;
    background-color: #fff;
  }

  .search-nothing {
    padding-left: 0rem;
    text-align: center;
  }
}
</style>
