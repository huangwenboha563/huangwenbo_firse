<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld   :title="title"/>
    <button @click="change">父页面的按钮</button>
  </div>
</template>

<script lang="ts">
import { defineComponent ,ref} from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    let title = ref('你好吗');
    const change = ()=>{
      title.value="我很好"
    }
    const changeFather = ()=>{
      title.value="我被变了"
    }
    return {
      title,
      change,
    }
  }
});
</script>
