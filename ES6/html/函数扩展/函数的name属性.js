/**
 * Created by huangwenbo on 18/7/16.
 */
function fn () {
    console.log(this);
}
console.log(fn.name);

console.log((function () {
}).name); // 匿名函数的name是空字符串

var obj = {
    x:'xxx'
}

var fn1 = fn.bind(obj);
fn1();
console.log(fn1.name); // bound fn   是由fn 改变this得来的，不是fn1

// 通过构造函数创造出来的函数的名字也比较特殊

let f = new Function("n","return n");
console.log(f(5));
console.log(f.name); // anonymous 匿名
