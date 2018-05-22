<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in list">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend', // 单文件组件的名字
    props: {
      list: Array
    },
    data() {
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
    background: #eee;
    line-height: 0.8rem;
    margin-top: .2rem;
    padding-left: 10px;
  }

  .item {
    width: 100%;
    height: auto;
    .item-img-wrapper {
      width: 100%;
      height: 2.9rem;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .item-info {
      padding: .2rem;
      padding-left: .2rem;
      .item-title {
        height: .44rem;
        line-height: .44rem;
        font-size: 0.22rem;
        .text-overflow();
      }
      .item-desc {
        height: .44rem;
        line-height: .44rem;
        color: #bbb;
        .text-overflow();
      }
    }
  }
</style>
