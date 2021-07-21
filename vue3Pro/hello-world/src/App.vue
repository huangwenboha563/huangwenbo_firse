<template>
  <div id="nav">
    <router-link to="/person/小吕">查询人员信息</router-link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/person/刘宽">查询人员信息</router-link>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <router-link to="/base?name=刘阔">查询基本信息</router-link>
  </div>
  <!--单页面应用要占的坑位-->
  <router-view></router-view>
</template>

<style lang="less">

</style>
