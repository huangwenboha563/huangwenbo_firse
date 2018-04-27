// TMD总是把includes和find搞混乱
// 一共有五个人，这五个人里面有没有'c'有就返回true没有就返回false
let arr = ['a', 'b', 'c', 'd'];
console.log(arr.includes('a'));
// 有a就返回true没有a就返回false

// [1, 2, 3].includes(2);     // true
// [1, 2, 3].includes(4);     // false
// [1, 2, 3].includes(3, 3);  // false 从索引为3开始找
// [1, 2, 3].includes(3, -1); // true  3+-1=2从索引为2开始找找到了所以为true
// [1, 2, NaN].includes(NaN); // true

// 第二个参数的详细解释 arr.includes(searchElement, fromIndex)

// 从该索引处开始查找 searchElement。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜索。默认为 0。

/*
*  includes 经常用来和indexOf来比较
*  indexOf 没有 includes语义化
*  indexOf 最恶心的地方是不能识别NaN
*
*  [1,2,3,NaN].indexOf(NaN) -1  找不出来
*
*/