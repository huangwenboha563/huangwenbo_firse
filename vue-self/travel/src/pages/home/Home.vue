<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>

  </div>
</template>

<script>
  import HomeHeader from './components/Header.vue'
  import HomeSwiper from './components/Swiper.vue'
  import HomeIcons from './components/Icons.vue'
  import HomeRecommend from './components/Recommend.vue'
  import HomeWeekend from './components/Weekend.vue'
  // home获取ajax函数发给各个组件
  import axios from 'axios'

  export default {
    name: 'Home', // 单文件组件的名字
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    data() {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    created() {
      this.getHomeInfo();
    },
    methods: {
      getHomeInfo() {
        axios.get('static/mock/index.json')
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          // swiper
          this.swiperList = data.swiperList;
          // iconSwiper
          this.iconList = data.iconList;
          // 推荐数据
          this.recommendList = data.recommendList;
          // 周末游
          this.weekendList = data.weekendList;
        }
        console.log(this.city);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .swiper-pagination-bullet-active {
    background: #fff;
  }
</style>
