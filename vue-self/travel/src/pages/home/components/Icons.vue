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
    data () {
      return {
        iconList: [{
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '必游景点'
        }, {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
          desc: '踏青赏花'
        }, {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          desc: '动植物园'
        }, {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          desc: '故宫'
        }, {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
          desc: '古北水镇'
        }, {
          id: '006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
          desc: '景点门票'
        }, {
          id: '007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
          desc: 'q+精选'
        }, {
          id: '008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '演出'
        }, {
          id: '009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
          desc: '其他'
        }],
        swiperOption: {
          loot: true
        }
      }
    },
    computed: {
      pages() {
        let ary = [];
        this.iconList.forEach(function (item, index) {
          let aryIndex = Math.floor(index / 8);
          if (!ary[aryIndex]) {
            ary[aryIndex] = [];
          }
          ary[aryIndex].push(item);
        })
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
