<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
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
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loot: true
        },
        swiperList: [
          {
            id: '001',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg'
          },
          {
            id: '002',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg'
          }
        ]
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
