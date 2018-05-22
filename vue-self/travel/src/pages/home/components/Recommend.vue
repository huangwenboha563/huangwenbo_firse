<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend', // 单文件组件的名字
    data () {
      return {
        recommendList: [{
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_200x200_7690e4cd.jpg',
          title: '北京赏花好地方',
          desc: '亲近大自然八达岭野生动物园'
        },{
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201311/12/3e2de7e7f2fa170fc8d65eac.jpg_200x200_015edb8c.jpg',
          title: '太原赏花好地方',
          desc: '亲近后北屯菜市场'
        },{
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
          title: '长治吃猪头肉好地方',
          desc: '猪头肉配烧饼，多点辣椒油'
        },{
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/2f/e615bc3c8e0cf46d9fb92c58ac305f45.water.jpg_200x200_e4e69a48.jpg',
          title: '稷山吃饼子好地方',
          desc: '稷山油酥半圆饼子就是好'
        }]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .text-overflow {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .title {
    height: 0.8rem;
    background: #eee;
    line-height: 0.8rem;
    margin-top: .2rem;
    padding-left: 10px;
  }

  .item {
    display: flex;
    height: 1.9rem;
    overflow: hidden;
    .item-img-wrapper {
      width: 1.7rem;
      height: 1.7rem;
      margin: .1rem;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .item-info {
      flex: 1;
      padding: .1rem;
      min-width: 0; /*这个min-width属性加的牛逼！！！*/
      .item-title {
        line-height: .54rem;
        font-size: 0.32rem;
        .text-overflow();
      }
      .item-desc {
        line-height: .4rem;
        color: #bbb;
        .text-overflow();
      }
      .item-button {
        height: .44rem;
        line-height: .44rem;
        color: #fff;
        margin-top: .16rem;
        background: #ff9300;
        padding: 0 0.08rem;
        border-radius: .06rem;
      }
    }
  }
</style>
