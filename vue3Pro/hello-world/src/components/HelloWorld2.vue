<template>
  <div class="hello">
    <hr>
    {{changeObj}}
    <!--{{changeObj.name.value}}
    {{changeObj.age.value}}-->
    <button @click="test">点击我222</button>
  </div>
</template>

<script>
  import {reactive,toRefs} from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const changeObj = toRefs({name:'刘宽',age:18}) // const {name,value} = toRefs(obj) // 这样也可以 // 对应1
    console.log(changeObj);

    function test () {
      changeObj.name.value = '刘阔'
      changeObj.age.value = 20
      console.log(changeObj);
    }
    return {
      changeObj,
      test
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
