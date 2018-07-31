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
    name: "CityHeader"
  }
</script>

<style scoped lang="less">
  @import "~@/assets/less/varibles.less"; /*引入公用的*/
  .header {
    width: 100%;
    height: @headerHeight;
    line-height: @headerHeight;
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
