
<template>
  <!-- vue3的学习 -->
  <div class="about">
    <h1>about页面</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { demo } from "../utils/demo";

export default defineComponent({
  props: {
    title: String
  },
  setup(props, context) {

  }
});
</script>
// css
<style lang="less" scoped>
</style>

