// filter(删除一些，不想要的留下想要的)
// 过滤:去掉不想要的，留下想要的
/**
 *  是否操作原数组       no
 *  整体的返回结果       过滤后的新数组
 *  回调函数的返回结果    如果返回true，表示这一项放到新数组中
 */

let arr = [1,2,30,4,9,8];
let newAry = arr.filter(function (item,index) {
    return item>2&&item<6;
    // 最常见的错误是 return 2<item<5;
    // 2<item 返回布尔true 或者false 再和5比较，布尔会转换为0或者1始终都小于5
    // 这个可以做一个面试点
})
console.log(newAry);


let arr1 = [1,2,30,4,9,8];
let x = arr1.forEach(function(item,index){
    item = item +1;
});
console.log(x);