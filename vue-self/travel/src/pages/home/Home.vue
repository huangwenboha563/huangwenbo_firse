<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>

  </div>
</template>

<script>
  import HomeHeader from './components/Header.vue'
  import HomeSwiper from './components/Swiper.vue'
  import HomeIcons from './components/Icons.vue'
  import HomeRecommend from './components/Recommend.vue'
  export default {
    name: 'Home', // 单文件组件的名字
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .swiper-pagination-bullet-active{
    background: #fff;
  }
</style>
