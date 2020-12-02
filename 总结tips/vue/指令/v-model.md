# v-model

> 使用v-model的修饰符

+ .lazy  .lazy修饰符给一个input框绑定v-model输入框的值变化值跟着变化内部是绑定的input事件，.lazy加上以后就是change事件了...,change事件只有当前input框失去焦点时才触发，input事件是在这个输入框不停的输入的时候触发，注意区分这两个事件
+ .trim  1.去除左侧和右侧的空格2.去除中间的空格，但是会保留一个

```html
<div id="app">
  <input type="text" v-model.lazy="message1">
  <h2>{{message1}}</h2>


  <input type="number" v-model="message2">
  <h2>{{message2}}-{{typeof message2}}</h2>

  <!-- 去除的是左右两边的空格，并保留中间的一个空格 eg:message3如果是 abc 显示到页面上的是abc,如果是a bc显示到页面上的是a bc,如果是a    bc显示到页面上的还是a bc，a和b之间如果有很多空格也是只去一个-->
  <input type="text" v-model.trim="message3">
  <h2>{{message3}}</h2>
</div>
```

```javascript
const app = new Vue({
    el: '#app',
    data: {
        message1: '',
        message2: 0,
        message3: ''
    }
})
```



