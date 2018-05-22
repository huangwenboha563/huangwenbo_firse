<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img"
             :src="item.imgUrl"
             alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
  export default {
    name: 'HomeSwiper', // 单文件组件的名字
    props:{
      list:Array
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loot: true
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  /*.wrapper >>> .swiper-pagination-bullet-active{*/
  /*background: #fff!important;*/
  /*}*/
  .wrapper {
    width: 100%;
    height: 2rem;
    overflow: hidden;

    .swiper-container {
      height: 100%;
    }
    .swiper-img {
      width: 100%;
      height: 100%;
    }
  }

</style>
