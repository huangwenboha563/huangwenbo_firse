/**
 * Created by huangwenbo on 18/7/16.
 */
// 自执行函数中this永远是window

// 一个参数省略掉()
// 函数体只有一行代码是 return xxx; {} 可以省略


// 箭头函数没有this指向 // 看当前函数在哪一级作用域中定义，也就是看他上一级作用域中的this(保证上一级作用域不是箭头函数)
// let a=0; // 换成 var a = 0;
var a = 0;
let obj = {
    fn: function () {
        console.log(this);
        let f = ()=> {
            console.log(this);
        }
    },
    fn1: () => {
        console.log(this.a);
    }
};
obj.fn();
// obj.fn1();
// 他妈的用node执行的代码不准

/*
box.onclick = () => {
    console.log(this);
}*/
