/*
 1. page
 2. 2017.7.8
 3. @hwb
 4. param1:请求url
 5. param2:查询条件是json形式
 6. param3:callback对返回数据进行回填(即拼接字符串替渲染dom)
 7. 其他参数:在init的时候可以传，覆盖
 */
define(['jquery'], function ($) {
    function Page(element) {
        this.element = element;
    }

    /*默认配置*/
    Page.defaults = {
        'searchResult': '#searchResult',                 //查询出来的结果回填的容器
        '': null                                       //占位行

    };

    /*构造函数原型*/
    Page.prototype = {
        init: function (options) {
            this.initOptions(options);
            this.initElements();
            // 初始化页面的一些基本特效
            this.initBindEffects();

        },

        /*初始化选项*/
        initOptions: function (options) {
            this.options = $.extend({}, Page.defaults, options);
        },

        /*初始化公共元素*/
        initElements: function () {
            this.searchResult = this.element.find(this.options.searchResult);

        },


        /*初始化点击页面基本特效*/
        initBindEffects: function () {
            // 页面的一些基本特效单独带
            var _this = this;

        },

        
    };


    return Page;

});




























