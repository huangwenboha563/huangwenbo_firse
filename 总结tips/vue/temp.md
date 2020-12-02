```javascript
	function ClientRegister(element) {
        this.element = element;
    };
    /**默认配置*/
    ClientRegister.defaults = {
        formInput: 'input.maybe-scroll',   //{Selector}所有的input单行文本
        '': null                           //占位行
    };
    ClientRegister.prototype = {
        /**初始化，主入口*/
        init: function (options) {
            this.initOptions(options);
            this.initElements();
            this.initActUrl();
            this.queryList();
            this.initBindEvent();
        },

        /**初始化选项*/
        initOptions: function (options) {
            this.options = $.extend({}, ClientRegister.defaults, options);
        },
        /**初始化公共元素*/
        initElements: function () {
            this.formInput = this.element.find(this.options.formInput);
        },
        initActUrl: function () {
            setSubPrj('pics');
            this.url = {
                queryList: makeAct('point/device/getPointDeviceAuthInfo'),
                export: makeAct('export/exportPointDeviceAuthInfoList')
            };
        },
        initBindEvent: function () {
            var _this = this;
            // dom操作
        }
        ..........
        
    };
    new ClientRegister($(document.body)).init();
```

# 分数统计

![](C:\Users\hwb\Desktop\资料\HuangWenbogit clone\huangwenbo_firse\总结tips\images\aa.jpg)





