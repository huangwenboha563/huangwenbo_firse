# 根据珠峰的es6做总结

## 野史

## bable(安装等)

> babel-cli （命令行转码）

> npm install babel-cli -g（全局安装，在任何项目中都可以用命令行来执行）

> npm uninstall babel-cli -g（把全局下安装的babel-cli卸载掉）

> 安装好之后在c盘用户下面的xx目录里面有bable.cmd等一些bable相关的cmd这就是能用命令的原因。比如babel命令

> 执行bable命令后我们可以完成一些编译或者其他的任务，主要原因是执行bable命令后，会自动加载一些处理任务的文件

## 配置.babelrc文件，安装一些语言解析包

> 需要把.babelrc文件配置在当前项目的根目录下

> 无法建一个没有名字的.babelrc文件，用webstorm可以创建，babelrc其实是一个json文件

> 在文件中编写一些内容如下
```josn

{
    "presets":[], // 存放的是我们编译代码的时候需要依赖的语言解析包
    "plugins":[]  // 存放的是，我们编译代码时候需要依赖的插件信息
}

```
> 安装依赖的语言解析包

+ 在当前项目的根目录下安装语言解析包，不能再根目录下安装

```
npm install babel-preset-latest 安装最新已经发布的语言标准解析模块

npm install babel-preset-stage-2 安装当前还没有发布已经进入草案的语言解析包(如果你的代码中用到了发布非标准的语法，我们就需要安装它，随你的喜好stage-0 stage-1 stage-2随便你安装)

安装完成后会生成node_modules文件夹，里面就是存放的就是我们刚才安装的文件
```

+ 要在当前项目的根目录下打开命令行窗口

## 使用命令编译es6

``` 
babel src/1.js -o dist/1.js   把src下面的用es6写的代码用编译成es5并保存到dist目录下
babel src -d dist 把src下面的所有的用es6写的编译成es5的
babel src -d dist -w 始终监听有变化就去自动编译

```
## 全局安裝vs局部安裝

> 全局安裝了babel-cli 在你的電腦上的所有的項目里都可以使用babel命令（就是以babel開頭的命令）比如 babel src -d dist
> 如果不是全局安裝沒有加g的情況下就要藉助package.json裡面的scripts，在這裡配置命令的名稱。執行npm run命令。
> 不建議全局安裝的目的是避免全局安裝的babel-cli版本和局部安裝的babel-cli版本不一樣帶來不必要的麻煩。
> 總之一句話，只有全局安裝了babel-cli才能在命令行裡面使用babel相關的命令。


## 尝试模块化的时候浏览器不支持require必须讲过babel转化才能识别。任何浏览器都不支持require除非用webpack等构件工具