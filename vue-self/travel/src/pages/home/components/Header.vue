<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-fanhui"></div>
    </div>
    <div class="header-input"><span class="iconfont icon-sousuo"></span><i>输入城市景点/游玩/主题</i></div>
    <div class="header-right"><span>{{this.city}}</span><span class="iconfont icon-jiantouarrow486"></span></div>
  </div>
</template>

<script>
  export default {
    name: 'HomeHeader', // 单文件组件的名字
    props:{
      city: String
    },
    data() {
      return {
        msg: 'hello'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "~@/assets/less/varibles.less";

  .header {
    height: 0.86rem;
    line-height: .86rem;
    display: flex;
    background: @bgColor;
    color: #fff;
    .header-left {
      width: .64rem;
      float: left;
      .icon-fanhui {
        text-align: center;
        font-size: .3rem;
      }
    }
    .header-input {
      flex: 1;
      background: #fff;
      padding-left: .18rem;
      border-radius: .1rem;
      margin-top: 0.12rem;
      height: 0.64rem;
      line-height: 0.64rem;
      margin-left: .2rem;
      color: #ccc;
      i, span {
        vertical-align: middle;
      }
    }
    .header-right {
      width: 1.24rem;
      float: right;
      text-align: center;
      .icon-jiantouarrow486 {
        font-size: .35rem;
      }
      span {
        vertical-align: middle;
      }
    }

  }
</style>
