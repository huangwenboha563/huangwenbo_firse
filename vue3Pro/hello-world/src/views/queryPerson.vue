<template>
    <div>
        查询人员信息----{{username}}
    </div>
</template>

<script>
    export default {
        name: "queryPerson",
        computed:{
            username(){
                console.log(this.$route.params);
                return this.$route.params.id;
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>
