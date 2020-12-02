# 认识plugin

## plugin是什么

> plugin是插件的意思，通常是用于对某个现有的架构进行扩展
>
> webpack中的插件,就是对webpack现有的功能的各种扩展...，比如打包优化,文件压缩等

## loader和plugin的区别

> loader主要用于转换某些类型的模块，它是一个转换器
>
> plugin是插件,它是对webpack本身的扩展，是一个扩展器
>
> 1. 关于执行顺序plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack的过程，它并不是直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务...

## plugin的使用过程

> 通过npm安装需要使用plugins(某些webpack已经内置的插件不需要安装)
>
> 在webpack.config.js中的plugins中配置插件

常用插件

```javascript
 new webpack.BannerPlugin('最终版权归aaa所有'), // 这个插件的作用就是在bundle.js加上一个版权声明，webpack自带的插件
 new HtmlWebpackPlugin({
   template: 'index.html'
 }),
new UglifyjsWebpackPlugin()
// 使用这些plugin后，执行的顺序
1. webpack启动后，在读取配置的过程中，会执行new xxx(options)初始化一个MyPlugin，获取实例
2. 在初始化compiler.plugin(事件名称，回调函数)，监听到webpack广播出来的事件，
3. 并且可以通过compiler对象去操作webpack
```

# babel的缓存是怎么实现的

# webpack的HMR怎么配置

- 浏览器是如何更新的

- 如何做到页面不刷新也就自动更新的（**webpack-dev-server的功劳**）

  webpack3.x配置如下

  devServer: {

  ​	conotentBase:'./dist',

  ​    **inline: true**

​      }

- webpack-dev-server webpack-dev-middleware

- 自己有没有写过ast，webpack通过什么把公共的部分抽出来的，属性配置是什么

  1. ast是什么？

  2. 因为npm run dev和npm run build会执行一些个性文件...

     ```html
     const webpackMerge = require('webpack-merge')
     通过webpack-merge自带的合并方法来合并
     ```

     - `base.congif.js  npm run dev和 npm run build都会走这个base.js`

     ```javascript
     // 这是base.congif.js
     const path = require('path')
     const webpack = require('webpack')
     const HtmlWebpackPlugin = require('html-webpack-plugin')
     const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
     
     module.exports = {
       entry: './src/main.js',
       output: {
         path: path.resolve(__dirname, '../dist'),
         filename: 'bundle.js',
         // publicPath: 'dist/'
       },
       module: {
         rules: [
           {
             test: /\.css$/,
             // css-loader只负责将css文件进行加载
             // style-loader负责将样式添加到DOM中
             // 使用多个loader时, 是从右向左
             use: [ 'style-loader', 'css-loader' ]
           },
           {
             test: /\.less$/,
             use: [{
               loader: "style-loader", // creates style nodes from JS strings
             }, {
               loader: "css-loader" // translates CSS into CommonJS
             }, {
               loader: "less-loader", // compiles Less to CSS
             }]
           },
           {
             test: /\.(png|jpg|gif|jpeg)$/,
             use: [
               {
                 loader: 'url-loader',
                 options: {
                   // 当加载的图片, 小于limit时, 会将图片编译成base64字符串形式.
                   // 当加载的图片, 大于limit时, 需要使用file-loader模块进行加载.
                   limit: 13000,
                   name: 'img/[name].[hash:8].[ext]'
                 },
               }
             ]
           },
           {
             test: /\.js$/,
             // exclude: 排除
             // include: 包含
             exclude: /(node_modules|bower_components)/,
             use: {
               loader: 'babel-loader',
               options: {
                 presets: ['es2015']
               }
             }
           },
           {
             test: /\.vue$/,
             use: ['vue-loader']
           }
         ]
       },
       resolve: {
         // alias: 别名
         extensions: ['.js', '.css', '.vue'],
         alias: {
           'vue$': 'vue/dist/vue.esm.js'
         }
       },
       plugins: [
         new webpack.BannerPlugin('最终版权归aaa所有'),
         new HtmlWebpackPlugin({
           template: 'index.html'
         })
       ]
     }
     
     ```

     - `dev.config.js`

     ```javascript
     // 这个是dev.config.js
     const webpackMerge = require('webpack-merge')
     const baseConfig = require('./base.config')
     
     module.exports = webpackMerge(baseConfig, {
       devServer: {
         contentBase: './dist',
         inline: true
       }
     })
     ```

     - `prod.config.js`

     ```javascript
     // 这个是prod.config.js
     const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
     const webpackMerge = require('webpack-merge')
     const baseConfig = require('./base.config')
     
     module.exports = webpackMerge(baseConfig, {
       plugins: [
         new UglifyjsWebpackPlugin()
       ]
     })
     ```

     - `合并以后的package.json,`,所以最后 npm run dev和npm run build就会走不通的问题

     ```javascript
     "scripts": {
         "test": "echo \"Error: no test specified\" && exit 1",
         "build": "webpack --config ./build/prod.config.js",
         "dev": "webpack-dev-server --open --config ./build/dev.config.js"
       },
     ```

     

     

- webpack怎么配置mock准发代理，mock的服务，怎么拦截转换的

- webpack的plugin和loader的编写，webpack plugin和loder的顺序

- webpack的打包构建优化，体积和速度

- DLLPlugin原理，为什么不能直接使用压缩版本的js

# webpack-dev-server（基于nodejs/express）

> 如果没有webpack-dev-server,如果我们页面1编程2，想要看到效果，还得npm run build去看效果，显然不合适，从内从中国读取，从内存中读取，要比磁盘快很多，很多....
>
> 最后执行npm run build，再在磁盘生成东西
>
> 'dev':'webpack-dev-server --open' 
>
> npm run dev，启动webpack-dev-server同时打开浏览器 npm run的时候走的是本地的

- webpack提供了一个可选的本地开发服务器，这个本地服务器基于node.js搭建，内部使用express框架，可以实现我们想要的让浏览器自动刷新显示我们修改后的结果。