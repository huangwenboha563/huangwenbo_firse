<template>
    <div id="nav">
        <hello-world></hello-world>
    </div>
    <!--单页面应用要占的坑位-->
    <router-view></router-view>
</template>
<script>
import HelloWorld from './components/HelloWorld'
export default {
    name: "App",
    components: {
        HelloWorld
    },
    data() {
        return {
            
        }
    }
}
</script>
<style lang="less">
</style>
