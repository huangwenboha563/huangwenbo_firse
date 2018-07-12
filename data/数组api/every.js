// 一共五个人每个人的年纪要大于18
let arr = [{name: 'hwb', age: '28'}, {name: 'hwb1', age: '38'}, {name: 'hwb2', age: '28'}, {name: 'hwb3', age: '19'}];
console.log(arr.every(function (item) {
    return item.age > 18
}));

// 如果全部大于18就返回true，有一个不大于18就返回false

/*
*  只要有一个是false就是false，只有全部是true才是true
*
*/
