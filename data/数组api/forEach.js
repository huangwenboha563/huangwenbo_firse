// forEach
// 好处，不像原来还要手动写for循环(编程式的)。(forEach内部是声明式的，不需要关心内部怎么实现)
// 不支持return，始终会执行下去
let arr = [1,2,3,4,5,6];

arr.b=10;// 这句话就是个数组添加一个私有属性
arr.forEach(function(item,index){
    console.log(item);  // 数组的每一项，不会把10打出来
    console.log(index); // 索引
})

// for in(不好的地方是如果数组用for in的话会把数组的私有属性遍历出来)
for (let key in arr) {
    console.log(key);
    // key是数组的索引，typeof的结果是是字符串
    // 能遍历数组的私有属性,会把b打出来
}

// for of （es6的）
let obj = {a:1,b:'xxx',c:'yyy'}
for (let val of arr) {
    // 支持return，不能遍历对象,只能遍历数组(如果你遍历对象的话就会报错)   (值 of 数组）
    console.log(val)
}
// 如果就想要用for of来遍历对象呢？借助Object.keys（将对象的key作为新的数组）[a,b,c]
// 既然这么麻烦为什么要多此一举呢？哈哈，估计是为了面试装逼吧
for (let val of Object.keys(obj)) {
    console.log(obj[val])
}