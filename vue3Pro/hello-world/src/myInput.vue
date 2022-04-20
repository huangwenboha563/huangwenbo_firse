<template>
  <div>
    {{obj}}
    <button @click="edit">点击我</button>
  </div>
</template>
<script>
  export default {
    name: "myInput",
    props: {
      obj: Object,
    },
    methods: {
      edit() {
        this.obj.name ="六块"
      }
    },

  };
</script>
<style lang="less">

</style>
