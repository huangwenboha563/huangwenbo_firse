// filter(可以理解为更新，把数组包装一下再返回)
let arr = [1,2,3,4];

// 俗称映射
// 返回新数组
// 不操作原数组
// 将原有的数组映射成新数组
let newAry = arr.map(function (item,index) {
    return '<li>'+item+'</li>';
    // return `<li>${item}</li>` // 这是es6中的模板字符串，遇到变量用${}包裹起来
    // return item*=2;
    // 每一项*2返回去
})

console.log(newAry);
console.log(newAry.join(''));// 插入到dom中即可


let ary = [1,2,3,4,5]
ary.join()// '1,2,3,4,5'
ary.join('')// '12345'
ary.join(';') // '1;2;3;4;5'