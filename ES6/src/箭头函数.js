// 箭头函数不具备this和arguments
// 自己没有this找上一级的this，从而解决了this的问题
// 如何更改this call apply bind  var _this = this  箭头函数
// 如何确定this和在哪里调用没有关系  看在哪里调用 .前面是谁就是谁
function aaa(b) {
    return b + 1;
}

let aa = b => {return b+1}; // let a = b => b+1;
// 去掉function关键字
// 如果没有{} 则必须是返回值   有大括号必须有return


/*
function a(b){
    return function(c){
        return b+c;
    }

}
console.log(a(1)(2));
*/
let a = b=> c => b+c;
// 两个箭头及以上的都叫高阶函数

console.log(a(2)(3)); // 按照规则一步一步去写
// 闭包=>内存泄露因为行程不销毁的作用域 // 当执行后返回的结果是引用数据类型
// vue中很多时候不能用箭头函数