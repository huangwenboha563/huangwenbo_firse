<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont icon-fanhui"></div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "header"
  }
</script>

<style scoped lang="less">
  @import "~@/assets/less/varibles.less";
  .header {
    width: 100%;
    height: .86rem;
    line-height: 0.86rem;
    text-align: center;
    color: #fff;
    background: @bgColor;
    font-size: .32rem;
    position: relative;
    .icon-fanhui {
      width: .64rem;
      text-align: center;
      font-size: .4rem;
      position: absolute;
      left: 0;
      top: 0;
      color: #fff;
    }
  }
</style>
