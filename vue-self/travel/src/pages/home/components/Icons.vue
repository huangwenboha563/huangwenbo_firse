<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="img-item">
            <img :src="item.imgUrl" alt="">
          </div>
          <p>{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeIcons', // 单文件组件的名字
    props:{
      list: Array
    },
    data () {
      return {
        swiperOption: {
          loot: true
        }
      }
    },
    computed: {
      pages() {
        let ary = [];
        this.list.forEach(function (item, index) {
          let aryIndex = Math.floor(index / 8);
          if (!ary[aryIndex]) {
            ary[aryIndex] = [];
          }
          ary[aryIndex].push(item);
        });
        return ary;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .text-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .icons {
    width: 100%;
    height: 3.8rem;
    .swiper-container {
      height: 100%;
    }
    .icon {
      width: 25%;
      float: left;
      height: 1.9rem;
      padding-top: 0.1rem;
      .img-item {
        width: 1.1rem;
        height: 1.1rem;
        margin: 0 auto;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      p {
        text-align: center;
        .text-ellipsis ();
      }
    }
  }
</style>
