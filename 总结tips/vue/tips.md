# runtime-onley

> 代码中不可以有任何的template

# runtime-compiler

> 代码中可以有template,因为有compiler可以用于编译template

```javascript
	function ClientRegister(element) {
        this.element = element;
    };
    /**默认配置*/
    ClientRegister.defaults = {
        formInput: 'input.maybe-scroll',                     //{Selector}所有的input单行文本
        '': null                                             //占位行
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
        initBindEvent: function () {
            var _this = this;
            // dom操作
        },
        // 导入设备授权的
        initUpload: function () {
            
        },
        // 导入算法授权的
        initUploadSf: function () {
            
        },
        // 授权和取消授权公用一个方法，后端会根据挡墙数据状态进行置反
        toggleLicensed: function () {
            alert('授权或者取消授权')
        },
        initActUrl: function () {
            // 除了uaop自己的（sso打头之外，基于uaop托管的平台都要设置url前缀）
            setSubPrj('pics');
            this.url = {
                queryList: makeAct('point/device/getPointDeviceAuthInfo'),
                export: makeAct('export/exportPointDeviceAuthInfoList')
            };
        },
        queryList: function (queryObj) {
            var parms = queryObj ||scope.get('queryData');
            // 发送ajax请求
        }
    };
    new ClientRegister($(document.body)).init();
```

