// 一共五个人(每个人不同的年纪，看下这五个人里面有没有18岁以上的)
let arr = [{name: 'hwb', age: 17}, {name: 'hwb1', age: 16}, {name: 'hwb2', age: 2}, {name: 'hwb3', age: 9}];
console.log(arr.some(function (item) {
    return item.age > 18
}));
// 有大于18的就返回true没有就返回fasle


// 扩展复习:https://blog.csdn.net/xiaaiwu/article/details/50507120