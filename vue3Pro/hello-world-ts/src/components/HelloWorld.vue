<template>
  <div class="hello">
    <h1>{{ title }}-{{ haha }}</h1>
    <button @click="test">子页面的按钮</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    title: {
      type: String,
      required: true,
    }
  },
  setup(props, context) {
    // 这样就不消除title的响应式了，那么title的响应式体现在哪里
    // let { title } = props;
    const { title } = toRefs(props);
    // const { msg } = props;
    // console.log(msg.value)
    let gai = () => {
      console.log(context);
      context.emit("changeFather");
    };
    let haha = computed(() => {
      console.log('title',title.value)
      return (title.value += "dfsdfsd");
    });
    const test = () => {
      console.log(title);
    };
    return {
      gai,
      test,
      msg2: title,
      haha,
    };
  },
  mounted() {
    function fun(arg:string):number {
      alert(typeof arg.length)
      return arg.length;
    }
    fun('abcdef');
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
