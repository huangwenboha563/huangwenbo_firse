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
let a1 = [1,2,3];
let a2 = [4,5,6];
console.log([...a1, ...a2]);
