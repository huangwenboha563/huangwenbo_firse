# 如何搭建本地开发环境？

Create React App是一个用于**学习**React的舒适环境，也是用React创建新的单页应用的最佳方式。

它会配置你的开发环境，以便使你能够使用最新的js特性，提供良好的开发体验，并为生产环境优化你的应用程序，只需要保证本地node>=8.10和npm>=5.6要创建项目，请执行如下操作

> 用脚手架创建一个react项目

```
npx create-react-app my-app
cd my-app
npm start
```

> npx 不是拼写错误是高版本的npm附带的package运行工具

Create React App不会处理后端逻辑或操作数据库，它只是创建一个前端构建流水线，所以你可以使用它来配合任何你想使用的后端，它在内部使用Bable和webpack,但你无需了解他们的任何细节。

当你准备好部署到生产环境时，执行 `npm run build` 会在 `build` 文件夹内生成你应用的优化版本。你能[从它的 README](https://github.com/facebookincubator/create-react-app#create-react-app--) 和[用户指南](https://facebook.github.io/create-react-app/)了解 Create React App 的更多信息。

# 用c-r-a脚手架创建的项目用代理解决跨域
> 开发环境中可以这样配置解决跨域问题
> 在package.json里面增加一个**proxy** eg："proxy":"localhost:5000"

# async awit 不想要.then了
+ 作用
> 简化promise的使用，不用再使用.then来指定成功或者回调函数，消灭回调函数从上往下写...，代码看着像同步了
> 以同步编码方式实现异步流程，程序真正执行是异步，但是代码看着是同步
+ 哪里写await 
> 在返回promise的表达式的左侧写await 想要promise异步执行的成功的value数据
+ 哪里写async
> await所在函数（最近的）定义的左侧写async
