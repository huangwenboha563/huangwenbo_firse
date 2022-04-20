// demo1 // 最后得到15

let arr = [1, 2, 3, 4, 5];
console.log(arr.reduce(function (prev, next) {
    console.log(prev, next);
    /*
    *   1 2
    *   3 3
    *   6 4
    *   10 5
    *
    */
    return prev + next; // return的结果会作为下一次的上一次，听着有点绕口。
}));

// demo2 强制指定第一次的prev

let arr2 = [{price: 20, number: 1}, {price: 50, number: 2}, {price: 60, number: 3}]
console.log(arr2.reduce(function (prev, next) {
    return prev + next.price*next.number;
}, 0));

// reduce完成统计(价格大于30的数量)
console.log('价格大于30的数量',arr2.reduce(function (prev, next) {
    return prev + (next.price>30?1:0);
}, 0));




// demo3 用处可以用来做数组扁平化
let arr3 = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr3.reduce(function (prev, next) {
    return prev.concat(next);
}));


var demo1 = {
    a:1,
    b:2,
    c:3,
    d:4
}
var demo2 = {
    b:22,
    c:33,
    d:44
}
var demo3 = {...demo1,...demo2}
console.log(demo3);
