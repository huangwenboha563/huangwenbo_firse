<template>
  <div>
    <draggable v-model="myArray" group="people" @start="drag=true" @end="onEnd">
      <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
    </draggable>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
    <my-component>
      <div ref="lk">你好吗，我很好</div>
    </my-component>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import HomeHeader from './components/Header.vue'
  import HomeSwiper from './components/Swiper.vue'
  import HomeIcons from './components/Icons.vue'
  import HomeRecommend from './components/Recommend.vue'
  import HomeWeekend from './components/Weekend.vue'
  import MyComponent from './components/mycomponent.vue'
  // home获取ajax函数发给各个组件
  import axios from 'axios'

  export default {
    name: 'Home', // 单文件组件的名字
    components: {
      draggable,
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend,
      MyComponent
    },
    data() {
      return {
        myArray:[{name:"aaaaaa",id:1},{name:"bbbbb",id:2},],
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
      //拖拽结束事件
      onEnd() {
        this.drag = false;
        console.log('拖拽排序之后',this.myArray)
      },
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
    },
    mounted() {
      console.log(this.$refs.lk);
      console.log(Array.from('foo'));;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .swiper-pagination-bullet-active {
    background: #fff;
  }
</style>
