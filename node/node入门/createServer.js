// 引入http模块
const http = require('http');
// 创建web服务器
const app = http.createServer();
// 当客户端发送请求时候
app.on('request',(req,res)=>{
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.write('你好吗')
    res.end()
})
app.listen(8000);

