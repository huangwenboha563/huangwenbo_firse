/**********传统的for循环*/
// 编程式 // 支持return中断循环

/*
let arr = ['a','b','c','d','e'];
for (let i = 0;i<arr.length;i++) {
    if (i == 1) return;
    console.log(arr[i]);
}
*/

/****forEach*********************************/
// 好处，不像原来还要手动写for循环(编程式的)。(forEach内部是声明式的，不需要关心内部怎么实现,正好vue也是声明式的 编程式vs声明式)
// 不支持return，始终会执行下去

/*
let arr1 = [1,2,3,4,5,6];
arr1.b=10;// 这句话就是个数组添加一个私有属性
arr1.forEach(function(item,index){
    if(index == 2) return; // 中断不了循环
    console.log(item,index);  // 数组的每一项，不会把10打出来
});
*/

// for in(不好的地方是如果数组用for in的话会把数组的私有属性遍历出来)
let arr2 = [1,2,3];
arr2.b = 000;
for (let key in arr2) {
    if(key == 2) return;
    console.log(key);
    // 支持return
    // key是数组的索引，typeof的结果是是字符串
    // 能遍历数组的私有属性,会把b打出来
    // 所以一般不用for in 遍历数组，
}

// for of （es6的）
let arr3 = [1,2,3];
for (let val of arr3) {
    // 支持return，不能遍历对象,只能遍历数组(如果你遍历对象的话就会报错)   (值 of 数组）
    console.log(val)
}
// 如果就想要用for of来遍历对象呢？借助Object.keys（将对象的key作为新的数组）[a,b,c]
// 既然这么麻烦为什么要多此一举呢？哈哈，估计是为了面试装逼吧
let obj = {a:1,b:'xxx',c:'yyy'}

for (let val of Object.keys(obj)) {
    console.log(obj[val])
}
/*
* 传统的for循环->>>>>编程式支持return
* for in->>>>> 支持return，但是会遍历私有属性(好好的遍历你的对象，不要想着去遍历数组)
* for of->>>>> 支持return，不会遍历私有属性(好好的去遍历数组，遍历对象报错，要一定要遍历对象，先把key转换成数组再说)
* forEach->>>>>声明式 不支持return
*
*
*
*/
