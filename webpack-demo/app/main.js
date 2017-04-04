// 用来把Greeter模块返回的节点插入页面
var greeter = require('./Greeter.js');
// import './main.css'
document.getElementById('root').appendChild(greeter());