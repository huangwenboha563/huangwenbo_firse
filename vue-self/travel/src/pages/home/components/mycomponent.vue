<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'xx', // 单文件组件的名字
    data() {
      return {}
    },
    mounted() {
      console.log('加载了');
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
