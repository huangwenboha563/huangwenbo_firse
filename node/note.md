## npm  命令

- npm install npm@latest -g （更新npm版本）
- npm init -y （生成package.json）
- npm install jquery（node_modules文件里面，会有jquery目录）
- npm install vue（同样会安装到node_modules文件夹里面，会有一个vue目录）

### 解释

+ npm install a ,npm install b以后会在package.json这文件里面的dependencies里面写入依赖，及时node_modules文件删除掉也没关系；
+ npm install 一个命令就给你安装上了所有的依赖。
+ npm uninstall vue  就把vue从node_modules文件夹和package.json文件里面删除了
+ 老版本的npm  npm install xxx --save 才能保存到dependencies里面去，新版本的npm不需要。
+ npm update jquery (意思是把jquery更新一下,如果是最新版本就没啥反应);
+ npm install jquery@1.2.0  安装指定的一个老版本,就把当前版本替换了。再执行npm update jquery 再次变成最新的jquery版本比如3.0.0;
+ npm init -y 如果不-y的话就会各种问问题
+ package.json里面的scripts配置说明 "dev" "test" "xxx自己起的名字": "要执行的命令写在里面"