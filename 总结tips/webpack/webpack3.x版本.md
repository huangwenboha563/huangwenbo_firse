> **b站vue教程中先穿插的webpack3.x版知识**，**因为vue-cli2依赖3.x版本的webpack**
>
> **treer -e ./result.txt -i node_modules**
>
> `npm run dev和npm run build都是打包`，有个误区，认为npm run build生成dist目录才叫打包~,这两个命令都会走webpack.config.js

1. 全局安装

   npm install webpack@3.6.0 -g

2. 局部安装

   npm install webpack@3.6.0 --save-dev

为什么全局安装之后还要进行局部安装呢？

- 在终端执行webpack命令，使用的是全局安装的webpack
- 在package.json中定义scripts时，其中包含了webpack命令，那么使用是局部webpack

[TOC]

#  一、最基础入门demo

1. 目录结构

```
├─index.html
├─src
|  ├─info.js
|  ├─main.js
|  └mathUtils.js
├─dist
|  └bundle.js
```

2. 其他文件

```javascript
// 1. info.js
export const name = 'why';
export const age = 18;
export const height = 1.88;
// 2.mathUtils.js
function add(num1, num2) {
  return num1 + num2
}

function mul(num1, num2) {
  return num1 * num2
}

module.exports = {
  add,
  mul
}
// 3.main.js
// 1.使用commonjs的模块化规范
const {add, mul} = require('./mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化的规范
import {name, age, height} from "./info";

console.log(name);
console.log(age);
console.log(height);
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>

<script src="./dist/bundle.js"></script>
</body>
</html>
```

> ```
> 在终端执行 webpack ./src/main.js ./dist/bundle.js
> 充分说明webpack既可以对commonjs规范的进行打包，也可以对es6规范的进行打包，也就值既支持commonjs又支持es6的模块化，此时用到的webpack就是全局安装的那个webpack
> ```



#  二、加入webpack.config.js的使用

1. 目录结构

```
├─index.html
├─package-lock.json
├─package.json
├─result.txt
├─webpack.config.js
├─src
|  ├─main.js
|  ├─js
|  | ├─info.js
|  | └mathUtils.js
├─dist
|  └bundle.js
```

2. package.json文件

```javascript
// package.json文件如下  是通过  npm init 生成的 .json文件是不能写注释的，因为是笔记，所以...
{
  "name": "meetwebpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack" // npm run build 执行，既然要执行肯定要有入口和出口...请看webpack.config.js
  },
  "author": "",
  "license": "ISC",
  "devDependencies": { // webpack肯定是开发依赖...
    "webpack": "^3.6.0"
  }
}

```

3. 配置文件

```javascript
// node的 一个模块
const path = require('path')

module.exports = {
  entry: './src/main.js', // 入口
  output: { // 出口
    path: path.resolve(__dirname, 'dist'), // 要求是绝对路径
    filename: 'bundle.js'
  },
}
```

> npm run build时候，走的是局部安装的这个webpack,优先找本地...
>
> 在任意终端里面执行webpack xxxx,一定用的是全局的

# 三、进一步处理css

> 处理非js文件离不开loader，那么什么是loader?
>
> 把css也当做模块打包到bundle.js

> loader是webpack中一个非常核心的概念
>
> + 在我们之前的实例中，我们主要用webpack来处理我们的js代码，并且webpack会自动处理js之间的依赖关系。
> + 但是在开发中我们不仅仅有基本的js代码处理，我们也需要加载css，图片，也包括一些高级的将es6转成es5代码，将ts转换成es5代码，将scss，less转成css，将.jsx .vue文件转成js文件等
> + 对于webpack本身的能力来说，对于这些转换是不支持的。
> + 那怎么办，给webpack扩展对应的loader就可以
>
> loader使用过程
>
> + 通过npm安装对应的loader
> + 在webpack.config.js的modules下进行相关配置
>
> 大部分loader我们都可以在webpack的官网中找到并且学习对应的方法

1. 目录结构

```
├─index.html
├─package-lock.json
├─package.json
├─webpack.config.js
├─src
|  ├─main.js
|  ├─js
|  | ├─info.js
|  | └mathUtils.js
|  ├─css
|  |  └normal.css
├─dist
|  └bundle.js
```

2. normal.css

```css
body {
   background-color: red;
}
```

3. main.js

```javascript
// 1.使用commonjs的模块化规范
const {add, mul} = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化的规范
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

// 3.依赖css文件，看这里，看这里，看这里，看这里，把css也当做模块了...最后也是打包到bundle.js
require('./css/normal.css')

```

4. webpack.config.js

```javascript
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 正则,以.css结尾  $标识结尾
        // css-loader只负责将css文件进行加载,加载完了
        // style-loader负责将样式添加到DOM中，加载完了再放进去才生效
        // 使用多个loader时, 是从右向左，注意顺序，使用多个loader时候，是从右向左的
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
```

5. package.json

```javascript
{
  "name": "meetwebpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "css-loader": "^2.0.2", // 多了这个loader
    "style-loader": "^0.23.1", //多了这个loader
    "webpack": "^3.6.0"
  }
}
// 到这一步为止，我们看bundle.js里面还是一些es6的代码
```



# 四、进一步处理less、图片、es6

+ .less  (less,less-loader)
+ 图片（url-loader）**如果图片太大的话依赖file-loader,file-loader不需要配置...**,总之图片需要两个loader，url-loader和file-loader
+ es6(babel-loader@7 babel-core babel-preset-2015)
+ babel-preset-env是什么，如果安装这个的话，还需要建个.babelrc文件来配置，用到脚手架的时候再看这个文件的配置....



> `在webpack官网中可以找到常用的loader的用法`
>
> less和less-loader什么关系？
>
> less-loader是为了把.less当做**模块**来处理，less转换为css还是依赖的是less，loader只是webpack要把.less文件当做是**模块**就需要安装对应的loader

1. 目录结构（新增一个less文件，新增两张img图片）

```
├─index.html
├─package-lock.json
├─package.json
├─webpack.config.js
├─src
|  ├─main.js
|  ├─js
|  | ├─info.js
|  | └mathUtils.js
|  ├─img
|  |  ├─test.jpg
|  |  └timg.jpg
|  ├─css
|  |  ├─normal.css
|  |  └special.less
├─dist
|  ├─bundle.js
|  ├─img
|  |  └timg.32f55763.jpg
```

2. webpack.config.js

> 补充知识点，在处理图片的过程中增加了一个`publicPath：'dist/'`
>
> 详细过程：
>
> 1. 看img文件夹下的两个图片，test.jpg小于13000，timg.jpg大于13000，所以当我们在**normal.css**，用着两张图时，npm run build之后test.jpg可以正常显示，如果normal.css换成timg.jpg的话，npm run build之后显示不了，为什么显示不了，是因为timg.jpg被打包到dist下面了，所以是路径出了问题，解决方案:增加`publicPath: 'dist/'`，normal.css该怎么引用还怎么引用...只是在浏览器预览的时候webpack会自动找dist下面的那个...

```javascript
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
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
        test: /\.less$/, // 因为新增了special.less所以要依赖这个loader
        use: [{
          loader: "style-loader", // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader", // compiles Less to CSS
        }]
      },
      {
        // jpg,jpeg小插曲，因为以前在DOS系统中文件名只能存在三位，就好像我们见过.htm一样  
        test: /\.(png|jpg|gif|jpeg)$/, // 新增了img文件所以要依赖这两个
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片, 小于limit时, 会将图片编译成base64字符串形式.
              // 当加载的图片, 大于limit时, 需要使用file-loader模块进行加载.
              limit: 13000,
              // 1.dist下搞个img文件夹下[name]表示原来的名字2.hash值设置8位3.[ext]扩展名，图片原来的扩展名eg:.jpg
              name: 'img/[name].[hash:8].[ext]'
            },
          }
        ]
      },
      {
        test: /\.js$/, // 
        // exclude: 排除
        // include: 包含
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}
```

3. package.json

```javascript
{
  "name": "meetwebpack",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-es2015": "^6.24.1",
    "css-loader": "^2.0.2",
    "file-loader": "^3.0.1",
    "less": "^3.9.0", // less-loader
    "less-loader": "^4.1.0", // 处理less文件
    "style-loader": "^0.23.1",
    "url-loader": "^1.1.2",
    "webpack": "^3.6.0"
  }
}

```

4. less文件

```css
@fontSize: 50px;
@fontColor: orange;

body {
  font-size: @fontSize;
  color: @fontColor;
}

```

5. main.js入口 

```javascript
// 1.使用commonjs的模块化规范
const {add, mul} = require('./js/mathUtils.js')

console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用ES6的模块化的规范
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

// 3.依赖css文件
require('./css/normal.css')

// 4.依赖less文件
require('./css/special.less')
document.writeln('<h2>你好啊,李银河!</h2>')
// 最后执行npm run build，看页面的话就会看到你好啊，李银河很大几个字也就是.less设置的那个变量
// 疑问，每写一点，为了看效果，都要npm run build，好麻烦啊....别着急，后面会搭建一个本地webpack-dev-server服务器进行热更新

```

6. normal.css

```css

body {
  /*background-color: red;*/
  background: url("../img/timg.jpg"); // 注意这里用到了图片
}
// 到这一步 npm run build之后看bundle.js里面就看不到const let等关键词了，都被转换为val了，这样大部分浏览器就支持了
```

# html-webpack-plugin作用

+ 目前我们的index.html文件是存放在项目的根目录下的

  - 我们知道，在真实发布项目时，发布的dist文件夹中的内容，但是dist文件夹中如果没有index.html文件，那么打包的js等文件也就没有意义了，
  - 所以，我们需要将index.html文件打包到dist文件夹中，这个时候就可以使用HtmlWebpackPlugin插件

+ 该插件可以为我们做这些事情

  - 自动生成一个index.html文件（可以指定模板来生成）
  - 将打包的js文件自动通过script标签插入到body中

+ 安装插件（忽略）

+ 使用插件,修改webpack.config.js中plugins部分的内容如下

  - 另外，我们需要删除之前在output中添加的publicPath属性，否则插入的script标签中的src可能会有问题

  ```javascript
  // npm run dev和npm run build都叫打包，千万不要认为npm run build才叫打包，npm run dev 和 npm run build都要用到这个插件
  
  new HtmlWebpackPlugin({
    template: 'index.html' // template表示根据什么模板来生成index.html
})
  ```
  
  









