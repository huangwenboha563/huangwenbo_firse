/**
 * Created by huangwenbo on 18/7/16.
 */

// 数组 ==> 非数组

let ary = [1, 2, 3]
console.log(...ary);

// 非数组 => 数组

let str = '12abc';
console.log([...str]);

function fn() {
    return [...arguments].sort();
}
fn(3, 4, 8, 9, 0, 44, 8);

let ary1 = [88, 0, 99, 145, 999];
// Math.max(); 求最大值
console.log(eval("Math.max(" + ary1 + ")"));
// "Math.max(88, 0, 99, 145, 999)"; // 默认会调用 ary1.toString() 方法
console.log(Math.max.apply(null, ary1));

console.log(Math.max(...ary1));
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
// 以前是用concat
console.log([...a1, ...a2]);
// 掘金博客----------------
function sum() {
    console.log(arguments) // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }
    // 我们可以看出，arguments不是一个数组，而是一个伪数组
    let total = 0
    let { length } = arguments
    for (let i = 0; i < length; i++) {
        total += arguments[i]
    }
    return total
}

console.log(sum(1, 2, 3, 4, 5, 6)) // 21

function sum(...args) { // 使用...扩展运算符
    console.log(args) // [ 1, 2, 3, 4, 5, 6 ] args是一个数组
    return eval(args.join('+'))
}

console.log(sum(1, 2, 3, 4, 5, 6)) // 21

// 正确的写法 扩展运算符只能放在最后一个参数
function sum(a,b,...args){
    console.log(a) // 1
    console.log(b) // 2
    console.log(args) // [ 3, 4, 5, 6 ]
}

sum(1,2,3,4,5,6)

// 错误的写法 扩展运算符只能放在最后一个参数
/* function sum(...args,a,b){
    // 报错
}

sum(1,2,3,4,5,6) */

// 但是扩展运算符不能把伪数组转为数组（除了有迭代器iterator的伪数组，如arguments）
let likeArr = { "0":1,"1":2,"length":2 }
let arr = [...likeArr] // 报错 TypeError: likeArr is not iterable

// 但是可以用Array.from把伪数组转为数组
let likeArr = { "0":1,"1":2,"length":2 }
let arr = Array.from(likeArr)
console.log(arr) // [1,2]





