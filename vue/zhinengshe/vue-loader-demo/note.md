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