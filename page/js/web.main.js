/**
 * Created by huangwenbo on 17/7/8.
 */

//整个pc的main在www目录下面名字是:web.main

require.config({
    baseUrl:'js/',
    paths: {
        /*我自己定义的一些模块，paths这个配置文件哪个js是干嘛的注释最好加清楚*/
        // requirejs路径问题@张建红搞清楚
        // 比如我自己写的某个js 别名是:self.page 文件路径是当前路径下的self-page.js，不要写.js后缀名，会报错
        'self.page':'selfPage',
        'jquery': 'jquery1.9.min'
    }
});
// 配置这个的话，一些错误信息会提示，比如文件路径不对什么的等等吧。
require.onError = function (err) {
    throw err;
};


