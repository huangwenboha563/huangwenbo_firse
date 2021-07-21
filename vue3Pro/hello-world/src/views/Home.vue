<template>
    <div>
        <div>
            <!--<h1>reactive的基本使用~~~</h1>
            <button @click="myFn">点击我</button>
            {{obj.name}}-{{obj.age}}-{{obj.gender}}-->
            <hr>
            <h3>名字: {{user.name}}</h3>
            <h3>年龄: {{user.age}}</h3>
            <h3>性别：{{user.gender}} </h3>
            <button @click="update">更新数据</button>
            <hr>
        </div>
        <HelloWorld></HelloWorld>
<!--        <HelloWorld2></HelloWorld2>-->
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import HelloWorld2 from '@/components/HelloWorld2.vue'
    import {ref, toRef, toRefs, reactive, isReactive} from 'vue';

    export default {
        name: 'Home',
        components: {
            HelloWorld,
            HelloWorld2,
        },
        setup() {
            // reactive的使用
            /*let oldObj = {name:'刘宽', age:20}
            let obj = reactive(oldObj)
            function myFn() {
                oldObj.name="刘阔"
              oldObj.gender = "男"
              /!*obj.name="刘阔"
              obj.age= 21*!/
              console.log(isReactive(obj)); // true
            }*/



            const obj = {
                name: '帽主席',
                age: 20,
            }
            const user = reactive(obj);

            const update = () => {
                // console.error(obj,user);
                obj.gender = "男"
                console.warn(obj,user);
                user.name = "小红";
            }

            return {
                user,
                update,
            }
        }
    }
</script>
