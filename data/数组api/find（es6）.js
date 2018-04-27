let arr = [{number:1},{number:2},{number:3},{number:4},{number:5},{number:6}]
console.log(arr.find(function (item) {
    return item.number == 2
}));


// 一共有10个人  不同的年级不同的职业，把职业是前端的那个人给我找出来。