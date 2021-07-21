<template>
    <div>
        <h2>reactive的使用</h2>
        <h3>名字: {{user.name}}</h3>
        <h3>年龄: {{user.age}}</h3>
        <h3>对象 : {{user.wife}}</h3>
        <h3>性别：{{user.gender}} </h3>
        <button @click="update">更新数据</button>
    </div>
</template>
<script lang="ts">
    import {defineComponent, reactive,} from 'vue';

    export default defineComponent({
        name: 'App',
        //需求 显示用户的相关信息 点击按钮 可以更新用户的相关信息数据
        //原理 使用poxy代理对象 被代理的叫目标对象
        //user对象或者obj对象 添加新属性 哪一种会影响界面更新
        //按道理来说操作obj目标对象界面不会刷新成功
        //user对象或者obj对象 移除一个属性 哪一种会影响界面更新

        setup() {
            const obj = {
                name: 'a',
                age: 20,
                wife: {
                    name: 'b',
                    age: 19,
                    cars: ['奔驰', '宝马', '奥迪']
                }
            }
            const user = reactive(obj);

            const update = () => {
                user.name = "小红"
                user.wife.name = "ss"
                obj.gender = "男"
            }

            return {
                user,
                update
            }
        }
    });
</script>
