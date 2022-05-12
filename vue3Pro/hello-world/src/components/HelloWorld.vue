<template>
  <div class="hello">
    <h2>reactive使用中遇到的问题</h2>
    <ul>
      <li v-for="item in testData.data?.real">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, watchEffect } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    let testData = reactive({
      data: null
    })
    return {
      testData,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
