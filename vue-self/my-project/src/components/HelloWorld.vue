<template>
  <div class="hello">
    <h1>你好吗我很好

    <span>fd f</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .hello{
    width: 100px;
    height: 500px;
    h1 {
      color: blue;
      span {
        font-size: 400px;
      }
    }
  }

</style>
