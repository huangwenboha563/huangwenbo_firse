<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in list">
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
    props: {
      list: Array
    },
    data () {
      return {}
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
