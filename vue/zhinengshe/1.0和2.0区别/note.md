# 1.0 和 2.0的区别

> 组件

1. 不要用Vue.extend的方式注册全局组件(Vue.extend2.0有些变化，能用也不要用，总之不要用哈哈)
```
// 建议都用这种方式
Vue.component(组件名称，{
    data:function(){
        
    },
    methods:{
    
    },
    template:xxx
})
```
2. 组件中的template模板不再支持'片段代码'
```
// 以前模板是这样的
<template>
     <h3>我是模板</h3><strong>我是模板</stroong>
<template>
```

```
// 现在是
<template>
    // 必须要用一个根元素div来包裹
    <div>
        <h3>我是模板</h3><strong>我是模板</stroong>
    </div>
<template>
```
3. 2.0推出组件定义的方式
```
// 直接json的形式看着简洁了许多
// ->全局的
var Home = {
    template:'#xxx',
    data:function() {
    
    }
}
Vue.component('my-aaa',Home)
// ->局部的
var Home = {
    template:'#xxx',
    data:function() {
    
    }
}
components:{
    'aaa':Home
}
```

> 生命周期？生命周期为啥要变呢？

+ 1.0

+ 2.0

    1. `beforeCreate(){实例刚被创建}`
    2. `created(){实例已经创建}`
    3. `beforeMount(){模板编译之前}`
    4. `mounted(){模板编译完成，相当于之前的ready}`
    5. `beforeUpdate(){组件更新之前}`
    6. `updated(){组件更新完毕}`
    7. `beforeDestroy(){组件销毁前}`
    8. `destroyed(){组件销毁后}`
    
+ 补充:如何销毁组件？

    1. `this.$destory(); // 调用实例上的销毁方法`
    
    
> 循环

```
// 1.0 循环笔记
// 数组  value in arr      (index,value) in arr    这两种都可以用{{$index}}来获取索引，第二种没必要而已
// 对象  value in obj      (key,value) in obj      {{$key}} {{$index}} 都可以得到,但是对象我们更想得到的是对象名和对象值

//track-by="$index" 有的话就可以渲染重复数据 || 没有的话不渲染重复数据会报错


// 2.0 循环笔记 去掉了隐士变量   $index  $key
// 数组  value in arr       (value, index) in arr
// 对象  value in obj       (value, key) in obj       (value, key, index) in obj

//:key="item.id"（:key="index"） 类似于1.0里面的track-by  （提高性能）


// 2.0 里面默认是可以添加重复数据的 是可以的是可以的是可以的
// 1.0 里面默认不可以添加重复数据，要添加重复数据要写track-by="$index"
```

> 自定义键盘指令

+ 1.0

`Vue.directive('on').keyCodes.ctrl=17 // 可能写的不准，请看代码这里只是笔记`

+ 2.0

`Vue.config.keyCodes.ctrl=17`


> 过滤器

+ 1.0里面的自定义过滤器都作废了

+ 自定义过滤器还是可以的，但是有区别(变化:自定义过滤器传参数变化了)

```
// 之前
{{msg | toDou '12' '5'}}
// 现在
{{msg | toDou('12'，'5')}}
```

> 组件通信

+ 1.0 子组件可以更改父组件的数据可以是同步 sync

+ 2.0 现在不允许子组件更改父组件的数据(不允许直接给父级的数据赋值)

+ 问题:那么我子组件就是想修改父组件的数据呢？
    
    1. 第一种方式:父组件给子组件数据的时候通过props传递一个对象这样就可以实现子组件修改父组件(推荐用这种方式)
    2. 第二种方式:只是不报错通过mounted~~~
    
> 单一事件管理组件通信(vuex的前身)

+ 什么是单一事件中心管理组件通信？
    
    