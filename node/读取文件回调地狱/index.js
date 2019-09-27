const fs = require('fs')

const path = require('path')
function getFileByPath(fpath) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fpath, 'utf-8', (err, dataStr) => {

            if (err) return reject(err)
            resolve(dataStr)

        })
    })
}
// 先读取文件1，在读取2，最后读取3
// 读取文件1
// 在上一个 .then 中，返回一个新的 promise 实例，可以继续用下一个 .then 来处理
// 如果 ，前面的 Promise 执行失败，我们不想让后续的Promise 操作被终止，可以为 每个 promise 指定 失败的回调
// 当我们有这样的需求： 哪怕前面的 Promise 执行失败了，但是，不要影响后续 promise 的正常执行，/此时，我们可以单独为 每个 promise，通过 .then 指定一下失败的回调；
// 有时候，我们有这样的需求，个上面的需求刚好相反：如果 后续的Promise 执行，依赖于 前面 Promise 执行的结果，如果前面的失败了，则后面的就没有继续执行下去的意义了，此时，我们想要实现，一旦有报错，则立即终止所有 Promise的执行；

getFileByPath(path.join(__dirname, '1.txt'))
    .then(function (data) {
        console.log(data)
        // 读取文件2（返回一个新的promise实例）
        // return getFileByPath(path.join(__dirname,'2.txt'))

    })
    .then(function (data) {
        console.log(data)

        // 读取文件3 （返回一个新的promise实例）
        return getFileByPath(path.join(__dirname, '3.txt'))
    })
    .then(function (data) {
        console.log(data)
    })
    .catch(function (err) {
        // catch 的作用： 如果前面有任何的 Promise 执行失败，则立即终止所有 promise 的执行，并 马上进入 
        // catch 去处理 Promise中 抛出的异常；
        console.log('正确的处理方式：' + err.message)
    })



function Ajax (url,type,data) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url:'',
            type: '',
            data: data,
            dataType: 'json',
            success: function (res) {
                resolve(res);
            },
            error: function (error){
                reject(error);
            }
        })
    });
}

let p = Ajax('a','get',{a:1,b:2});
p.then(function(){
    Ajax()
});






















/* let p = new Promise(function (resolve, reject) {
    $.ajax({
        type: '',
        dataType: 'json',
        success: function (res) {
            resolve(res);
        },
        error: function (error){
            reject(error);
        }
    })
});
p.then(function (data) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            type: '',
            data: {data:data},
            dataType: 'json',
            success: function (res) {
                resolve(res);
            },
            error: function (error){
                reject(error);
            }
        })
    });
}, function (err) {

}).then(function(data){

},function(error){

}) */