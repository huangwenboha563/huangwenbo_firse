/**
 *
 * Created by huangwenbo on 18/7/16.
 */
function fn(x = 5, y = 6) { // 一般都会把默认值放在最后
    // 函数参数默认值 x的默认值是5，y的默认值是6
    // 只有不传递实参的时候才会走默认值

}
fn(1, 2);

function fn1({x = 0, y = 0} = {}) {
    return {x, y}
}
console.log(fn1({x: 1}));
function fn2({x, y} = {x: 0, y: 0}) {
    return {x, y}
}
console.log(fn2({x: 1}));

function fn3(x,y=1,z) {
    // 代表的是实参的长度
    console.log(arguments.length);
}
fn3(1,2,3);
console.log(fn3.length); // 函数的length表示的是形参的长度（如果参数有默认值，显示的是第一个默认值的位置）