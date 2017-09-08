# vue - 笔记

* npm 

> 包管理器(偏向后台)

* bower

> 包管理器(偏向前端)

## 相关命令

+ 安装bower -> npm install bower -g 

    > 通过npm安装bower

+ 查看bower目前版本 -> bower --version

    > 查看目前安装的bower版本

## bower 相关命令

+ 安装 bower install <包名>
    > bower install vue （这样会下载vue最新的版本）
    
    > bower install vue@1.0.28 （下载指定的版本）
    
    > bower install vue#1.0.28 （@不行换#,应该是#来指定版本）

    > 想在哪个目录下安装直接cd进入到某个文件目录下执行该命令

    > 命令执行完以后就会在当前文件目录下出现一个bower_components的目录文件夹

    > 以后安装包的时候只需要进入到bower_components的上层目录 执行该命令即可
    
+ 卸载 bower uninstall <包名>

    > bower uninstall vue （卸载安装好的vue）

    > 用这个命令去卸载某个包比如jquery  vue 啥的必须进入到安装目录下和bower_components同级的目录
    
+ 查看 bower info <包名>

    > bower info vue

    > 就可以查看vue.js的相关版本

+ bower init  初始化 会出现bower.json文件类似于packag.json

    
## vue 动画相关

#### vue动画第一种用法

```
<div class="inner" v-show="flag" transition="fade">
        我一会消失一会隐藏
</div>
```
> 第一步：比如想让这个div有动画加一个 transition="fade"

> 第二步：然后在css里面这样写就可以
```
.fade-transition {
    transition:all 2s;
}
.fade-enter {
    opacity: 0;
    /*按理来说opacity应该是1啊，难道是bug吗*/
}
.fade-leave {
    opacity: 0;
}
```

#### vue动画第二种用法

> 这种用法首先要结合 animate.css这个css3的动画库

+ bower install animate.css

> 第一步

> transition="动画名称自己随便起名字"

> class="animated" 必须写 

```
<div id="div1" class="animated" v-show="bSign" transition="bounce">
        我一会消失一会隐藏
</div>
```

> 第二步

```
new Vue({
    el:'#box',
    data:{
        bSign:true
    },
    methods:{
        // es6的语法
        //   toggle(){
        //       this.bSign=!this.bSign;
        //   }
          toggle:function () {
              this.bSign=!this.bSign;
          }
    },
    transitions:{ //定义所有动画名称
        bounce:{
            enterClass:'zoomInLeft',
            leaveClass:'zoomOutRight'
        }
    }
});
```

# loader ? webpack 相关

> 用loader去开发?vue-loader

> a.vue b.vue  是什么鬼？

> 后缀名为.vue的文件里面包含三部分(`<template>html代码</template> <style>样式</style> <script>比如一些es6的代码</script>`)

## vue-loader + webpack 初次尝试

### 文件目录结构

1. vue-loader-demo

    * index.html
    * App.vue            首字母大写(官方建议)
    * main.js            入口文件
    * webpack.config.js (webpack配置文件)
    * package.json      npm init --yes
 
### es6 模块化开发

+ 导出模块

    ```
    export default{}
    ```
    
+ 导入模块

    ```
    import 模块名 from 地址
    ```
    
    
 # 电脑知识扫盲
 
 > 查看自己电脑的ip window上的
 
 1. ipconfig
 2. ipconfig -all
 
 > 看自己的网速
 
 ping www.baidu.com -t(windows)
 
 ping www.baidu.com （mac）
 
 > 终止正在运行的dos命令
 
 ctrl+c （mac和window都一样）
 
 > 关闭dos命令窗口
 
 exit 就是esc键盘(mac上这个键是不能退出终端的)
 
 > 清屏
 
 window: cls
 mac: clear
 
 > 文件的一些操作
 
 1. cd ../ 返回当前目录的上一层目录
 2. cd ./  当前目录   mac -> pwd
 3. cd /   当前磁盘的根目录 mac -> cd
 
 > 进入某个盘符
 
 D:    -> 直接进入D盘
 
 > 查看当前文件下有哪些文件
 
 在当前目录下执行 dir 
 
 
 > 直接进入某个文件夹
 
 
 shift + 右键，点击在此处打开命令行窗口
 
 # url uri urn
 
 * URL -> 统一资源定位符
 
  > http://v.qq.com:80/index.html?name=nihao&age=7#bbs
    
    1. http: 传输协议 客户端给服务器，服务器给客户端都是通过http协议进行传输的
    2. v.qq.com: 域名
    3. 80: 端口号
    4. ?name=nihao&age=7  URl问号传参->客户端要传递给服务器端的内容
    5. #bbs URL中的hash(锚点定位)
    6. index.html 请求资源文件名 ->告诉服务器我需要请求的静态资源文件是谁
  
  > 什么是传输协议
  
    1. http :超文本传输协议，除了传输文本，还可以传输其他的东西如xml
    2. https:更加安全的http
    3. ftp: 文件传输协议(应用于吧项目源文件传递到服务器上)
  
  > 在不指定服务器的情况下，每一种协议会有一个默认找的端口地址
  
    1. http ->  80
    2. https -> 443
    3. ftp ->   21
    
 * URN
 
  > 统一资源名称
 
 * URL = URL+URN
 
  > 统一资源标识符(统一资源信息)
  
# 笔记

## save   save-dev

+ save

    > 必须依赖的 比如vue.js  在dependences

+ save-dev

    > 生产环境依赖的比如: 在 devdependences
    
    

> vue脚手架?  vue-cli

> 脚手架是干啥的？帮用户提供好基本的项目结构

+ webpack

+ webpack-simple(少了Eslint和单元测试，仁智见仁建议用这个)

+ simple(个人觉得一点用都没有)

+ browerify

+ browerify-simple 

> 基本使用流程

1. npm install vue-cli -g  安装vue命令环境
2. vue init simple vue-simple-demo(生成的文件夹的名字) 或者 vue init webpack vue-webpack-demo(生成文件的名字)(操蛋的eslint) ->会问你要1.0还是2.0
3. 进入到生成文件的目录里面 npm install 或者 cnpm install -> 安装各种需要的loader等 
4. npm run dev (有可能报错提示端口冲突，在config/index.js改端口，草改端口号到底在哪里改，怎么一会再index.js文件里面改一会在package.json文件里面改fuck)