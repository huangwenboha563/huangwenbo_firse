<template>
    <div id="nav">
        fdsfsdfds
        <long-teng-input :obj="obj"></long-teng-input>
        {{obj}}
    </div>
    <!--单页面应用要占的坑位-->
    <router-view></router-view>
</template>
<script>
    import LongTengInput from './myInput.vue'
    let demo = {"msg":"操作成功","code":200,"data":[{"jrycNum":0,"totalNum":16593,"jjcqwcNum":0,"badwmc":"江西省公安厅","badwdm":"360043","cqwcNum":13273,"ycwcNum":13273}]}
    let demo2 = {"msg":"操作成功","code":200,"data":[{"finger":{"fingerWcNum":5531,"fingerRkNum":3318,"fingerCjNum":11062,"fingerWrkNum":13275,"fingerRkNumPer":"20.00%","fingerCjNumPer":"66.67%"},"voice":{},"iris":{},"dna":{"dnaCjNum":4426,"dnaWcNum":12167,"dnaCjNumPer":"26.67%","dnaRkNum":0,"dnaWrkNum":16593,"dnaRkNumPer":"0.00%"},"photo":{"photoRkNumPer":"20.00%","photoWrkNum":13275,"photoCjNum":9959,"photoRkNum":3318,"photoCjNumPer":"60.02%","photoWcNum":6634},"cjs":{"totalNum":16593,"cjNumPer":"20.01%","badwmc":"江西省公安厅","badwdm":"360043","ycNum":3320,"ycwcNum":13273},"foot":{"footCjNumPer":"33.36%","footWrkNum":16593,"footWcNum":11058,"footRkNumPer":"0.00%","footRkNum":0,"footCjNum":5535}}]}
    export default {
        name: "App",
        components: {
            LongTengInput
        },
        data() {
            return {
                obj: {
                    name: 1,
                    age: 2
                }
            }
        }
    }
</script>
<style lang="less">

</style>
