# 模块化
> npm i module_name  -S  = >  npm install module_name --save    写入到 dependencies 对象

> npm i module_name  -D  => npm install module_name --save-dev   写入到 devDependencies 对象

+ 传统开发方式的主要问题
  
    * 命名冲突
    * 文件依赖（js文件的依赖顺序）

+ 通过模块化解决上述问题
+ 浏览器端的模块规范（已经落伍）
  
    * amd
    * cmd
    
+ 服务器端的模块化规范

    * commonjs规范
    
    > 模块 分为单文件模块和包 模块成员导出module.exports和exports 对应的导入用require关键词
    
+ 大一统的模块化规范（es6模块化规范）
> 在es6模块化规范诞生之前，js社区尝试并提出了amd cmd commonjs等模块化孤帆
但是这些社区提出的模块化标准，还是存在一定的差异性和局限性，并不是浏览器与服务器通用的模块化标准，例如 amd和cmd适用于浏览器端，commonjs适用于服务器端

```
因此，es6语法规范中，在语言层次上面定义了es6模块化规范，是浏览器端与服务器端通用的模块化规范
es6模块化规范中定义
* 每个js都是一个独立的模块
* 导出模块成员使用import关键词
* 暴露模块成员使用export关键词
```

+ 在node中通过babbel可以使用es6的模块化规范
+ es6模块化基本语法
    * 默认导入和导出
    
        ```
        默认导入和导出
        // m1.js
        let a = 10;
        let b = 20;
        let d = 90;
        function show () {}
        // 每个文件中只有一次export default
        export default {
            a,
            b,
            d,
            show
        }
        // 别的js导入
        import m1 form 'm1.js'
        console.log(m1)
        // {a:10,b:20,d:90,show:[Function:show]}
        ```
    * 按需导入和导出
      
        ```
        // m1.js
        // 在每个模块中可以用多次按需导出
        export let a = 10;
        export leb b = 20;
        export function say = function () {}
        export default {
            n:'你好'
        }
        // 某个文件导入
        import nd,{a as newa ,b,say} from 'm1.js'
        ```
    * 直接导入并执行模块化代码
        > 有时候我们只想简单的执行某个模块中的代码，并不需要得到模块中向外暴露的成员，此时可以直接导入并执行模块代码
        
        ```
        // m1.js
        for  (let i = 0; i<10;i++) {
            console.log(i)
        }
        // 在某个文件中
        import 'm1.js'
        //这样就直接导入并执行该模块的代码了
        ```
        
        
# webpack
> webpack的基本使用，真实项目中比较复杂，配置也比较多。熟悉基本流程，再结合大型项目分析为什么那样配
>
> webpack和gulp对比的话，最主要的是更加强调**模块化管理**，而文件压缩，合并，预处理等功能，是他附带的功能。
>
> webpack依赖node环境，webpack正常 运行必须依赖node环境也就是电脑安装node即可，安装node的时候自动安装了npm（包管理工具）

## 基本使用

### 创建一个demo项目

- 新建项目空白目录，并运行npm init -y 命令，初始化包管理配置文件package.json
- 新建src源代码目录
- 新建src->index.html首页
- 初始化首页的基本结构
- 运行npm install jquery -S命令，安装jquery
- 通过模块化的形式，实现项目效果

### 在项目中安装和配置webpack
- 运行npm install webpack webpack-cli -D 命令安装相关的包
- 在项目目录中创建名为webpack.config.js的webpack配置文件
- 在webpack的配置文件中，初始化下面基本配置
```
module.exports = {
    mode:'development' // mode用来指定构建模式，表示是开发模式，还有production生产模式（会进行压缩，混淆等，比较慢，转换时间长，上线指定为production）
}
```
- 在package.json配置文件中的scripts节点下新增dev脚本如下
```
"scripts": {
    "dev":"webpack" // 可以通过npm run dev执行
}
```
-在终端中运行npm run dev 命令，启动webpack进行项目打包
```
自己会把index.js打包成dist/main.js  自动生成一个dist目录和main.js
此时main.js，里面没有进行打包压缩，等。
如果把mode改为production,再运行命令，main.js就被压缩了
```
### 注意

> 在webpack4.x版本中，默认约定，打包的入口文件为src下面的index.js 打包的出口文件是dist/main.js，如果想修改打包的入口和出口可以在webpack.config.js中新增如下配置信息

```
const path = require('path') // 导入nodejs中专门操作路径的模块
module.exports = {
    entry: path.join(_dirname,'./src/index.js'), // 打包入口文件的路径
    output: {
        path: path.join(_dirname,'./dist'), // 输出文件的存放路径
        filename: 'bundle.js' // 输出文件的名称
    }
}
```
### 自动打包

> 为什么需要自动打包?比如我们js里面原来有alert(0),想改成alert(1)看效果，还得重新执行npm run dev命令，如何配置自动打包呢？

- 运行npm install webpack-dev-server -D 命令，安装支持项目自动打包的工具
- 修改package.json scripts中的dev命令如下
```
scripts: {
    "dev": "webpack-dev-server"
}
```
- 将src index.html 中script脚本的引用路径改为 '/bundle.js'（虚拟的看不见的在内存中，代表项目根目录中有这个文件）
- npm run dev重新打包
- 浏览中访问localhost:8080,查看自动打包的效果
- webpack-dev-server会启动一个实时打包的http服务器
- webpack-dev-server打包生成的输出文件，默认放到了项目的根目录中，而且是虚拟的看不见的

### 生成预览页面

> npm run dev项目跑起来时，而是看见一层路径，我们期望的结果是localhost:8080就能直接看见index.html,怎么才能把src下面的index.html复制一份到根目录呢？

+ 运行 npm install html-webpack-plugin -D 命令，安装生成预览界面的插件
+ 修改 webpack.config.js文件头部区域，添加如下配置信息
```
// 导入生成预览页面的插件，得到一个构造函数
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html', // 指定要用到的模板文件
    filename: 'index.html' // 指定生成的文件的名称，该文件存在于内存中，在目录中不显示
})
```
- 修改webpack.config.js 文件中向外暴露的配置对象，新增如下配置节点
```
module.exports = {
    plugins: [htmlPlugin]
    // plugins数组是webpack打包期间用到的一些插件列表
}
```

### 配置自动打开浏览器

```
// --open 打包完成后自动打开浏览器页面
// --host 配置ip地址
// --port 配置端口
"scripts": {
    "dev": "webpack-dev-server --open --host 127.0.0.1 --port 8888"
}
```
### 加载器

- 通过loader打包非js模块

> 在实际开发过程中，webpack默认只能打包以.js结尾的模块，其他非.js后缀名结尾的模块，webpack默认处理不了，需要调用loaders加载器才可以正常打包，否则会出错。

> loader加载器可以协助webpack打包处理特定的文件模块，比如:

- less-loader可以打包处理.less相关的文件
- sass-loader可以处理.scss相关的文件
- url-loader可以打包处理css中与url路径相关的文件

#### 如何打包处理css？

```
1.运行 npm install style-loader css-loader -D 命令，安装处理css文件的loader
2.在webpack.config.js的module -> rules数组中，添加loader规则如下
// test 标识匹配
// use 顺序是固定的，不能颠倒否则会报错，多个loader的顺序是从后往前调用的，先调用css-loader进行第一步处理，再把处理结果交给style-loader处理，最后把处理的结果返回给webpack...
module: {
    rules: [
    {
        test: /\.css$/,use:['style-loader','css-loader']
    }
    ]
}
```

#### 打包处理less文件

```
1.npm install less-loader less -D
2.在webpack.config.js的module->rules数组中，添加loader规则如下
module: {
    rules: [
        {test:/\.less$/,use:['style-loader','css-loader','less-loader']}
    ]
}
```

### 打包处理样式表中的图片和字体文件

```
1.运行 npm install url-loader file-loader -D
2.在webpack.config.js的module->rules数组中添加loader规则如下
module {
    rules: [
        {
            test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
            use: 'url-loader?limit=16940'
        }
    ]
}
```

# npm run dev

# npm run build



