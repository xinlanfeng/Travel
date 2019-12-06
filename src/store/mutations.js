export default {
  changeCity (state, city) {
    state.city = city
    // 使用try...catch...以防用户关闭了浏览器的本地存储 或者 开启了隐私模式
    try {
      // HTML5提供的localStorage
      localStorage.city = city
    } catch (e) {

    }
  }
}
