<template>
    <div>
        查询基本信息---{{username}}
    </div>
</template>

<script>
    export default {
        name: "queryPerson",
        computed:{
            username(){
                console.log(typeof this.$route.query.name);
                return this.$route.query.name
            }
        }
    }
</script>

<style scoped>

</style>
