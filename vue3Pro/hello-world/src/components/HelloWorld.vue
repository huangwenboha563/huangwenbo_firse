<template>
  <div class="hello">
    <h2>reactive使用中遇到的问题</h2>
    <!--返回obj，放obj.name obj.age是可以的，通过点击事件改编obj.name="刘阔" obj.age=22 页面也会发生变化-->
    <!--{{obj.name}}
    {{obj.age}}-->
    <!--  如果页面上想直接放{{name}}  {{age}}   return {...obj} -->
    {{ name }} {{ age }}
    <button @click="test">点击我</button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const obj = reactive({ name: "刘宽", age: 18 });
    const changeObj = toRefs(obj); // const {name,value} = toRefs(obj) // 这样也可以 // 对应1

    function test() {
      changeObj.name.value = "刘阔";
      changeObj.age.value = 20;
    }
    return {
      // ...obj
      // 直接返回 ...obj,想在页面上直接放name 和 age是实现不了响应式的。为什么呢。因为obj 是响应式的，但是经过结构之后obj.name 和 obj.age是不具响应式的
      ...changeObj, // 上面如果解构之后，这里也可以return {name,age}了 // 对应1
      test,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
