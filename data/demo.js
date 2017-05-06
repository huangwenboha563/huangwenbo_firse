/**
 * Created by huangwenbo on 17/4/17.
 *
 * 新版课程池小班选课页面的交互
 */
define(['jquery', 'moment', 'fullcalendar', 'classie', 'grade.new.detail','mCustomScrollbar', 'classie'], function ($, m, fullCalendar, classie,GradeDetail) {
    // 滚动条插件初始化
    $(".content-scroll").mCustomScrollbar();

    /**
     *课程池列表页
     *@param {jQuery}element 课程池列表页容器元素
     */

    function SelectGrade(element) {
        this.element = element;
    };

    /**默认配置*/
    SelectGrade.defaults = {
        myGrade: '#myGrade',                                      //{可选课程}选择器
        hasSelectedGrade: '#hasSelectedGrade',                    //{已经选好课程}选择器
        selectGradeAgain: '.select-grade-again',                  //{再次选择课程的按钮}选择器
        selectCourseType: '.select-course-type',                  //{小班选择课程类型(小班还是一对一的)}选择器
        backGradeCourseName: '.back-grade-course-name',           //{回填小班课程的名字}选择器
        myGradeType: '#myGradeType',                              //{可选类型}选择器
        selectCourseTypeAgain: '.select-course-type-again',      //{可选类型}选择器
        gradeSure: '.grade-sure',                                 //{小班确定提交的按钮}选择器
        notEnouthHour: '.not-enough-hour',                       //{not-enough-hour}选择器
        gradeSureBtn: '.grade-sure-btn',                       //{小班的确定上课}选择器
        expectDate: null,                                        //{小班时间}
        '': null //占位行
    };

    SelectGrade.prototype = {
        /**初始化，主入口*/
        init: function (options) {
            // 初始化选项
            this.initOptions(options);
            // 初始化公共元素
            this.initElements();
            // 初始化让某些元素隐藏，某些元素消失
            this.initShowOrHide();
            // 初始化页面点击事件
            this.initEvent();
            return this;
        },

        /**初始化选项*/
        initOptions: function (options) {
            this.options = $.extend({}, SelectGrade.defaults, options);
        },

        /**初始化公共元素*/
        initElements: function () {
            this.myGrade = this.element.find(this.options.myGrade);
            this.hasSelectedGrade = this.element.find(this.options.hasSelectedGrade);
            this.selectGradeAgain = this.element.find(this.options.selectGradeAgain);
            this.selectCourseType = this.element.find(this.options.selectCourseType);
            this.backGradeCourseName = this.element.find(this.options.backGradeCourseName);
            this.myGradeType = this.element.find(this.options.myGradeType);
            this.selectCourseTypeAgain = this.element.find(this.options.selectCourseTypeAgain);
            this.gradeSure = this.element.find(this.options.gradeSure);
            this.expectDate = this.element.find(this.options.expectDate);
            this.notEnouthHour = this.element.find(this.options.notEnouthHour);
            this.gradeSureBtn = this.element.find(this.options.gradeSureBtn);
        },
        select: function (courseDate) {
            var _this = this;
            //-> 补充一点把选中的时间回填一下
            _this.selectedDate = courseDate;
            // console.log(selectedDate)
            // console.log(this.expectDate.selector)
            if (_this.selectedDate) {
                $(".select-time-name").html(_this.selectedDate.substring(0, 4) + "年" + _this.selectedDate.substring(5, 7) + "月" + _this.selectedDate.substring(8, 10) + "日");
            }
            // 因为查询课程的时候需要带一个参数日期所有在select之后得到日期之后再去查课程
            // 初始化查询课程
            this.initGradeCourse(_this.selectedDate);
            _this.show();
            return this;
        },
        show: function () {
            var _this = this;
            _this.toggleMenu($("#selectCourse"));
            return this;
        },
        /*初始化页面基本特效和交互方法*/
        initEvent: function () {
            var _this = this;
            //-> 选好某个小班切换到已经选好小班的样式
            this.myGrade.on('click', '.wait-selectd .right-icon', function () {
                var $this = $(this);
                var selectCourseName = $this.siblings('.both-about-message').find('.h-name').text();
                $this.addClass('select-right-active').parent('.wait-selectd').siblings('.wait-selectd').find('.right-icon').removeClass('select-right-active');
                _this.hasSelectedGrade.parent('.select-about-both').show();
                $this.parents('.select-about-both').hide();
                //把选好的课程的dom结构克隆到已选好的课程的结构中
                $("#hasSelectedGrade").html($this.parent('.wait-selectd').clone());
                // 让选择小班类型的选择器show出来
                _this.selectCourseType.show();
                // 把选好课的名字回填到课程类型(线上还是线下)这个容器中
                _this.backGradeCourseName.text(selectCourseName);
                $(".grade-empty").hide();
            });
            //-> 点击重新选择课程切换到选课列表
            this.selectGradeAgain.on('click', function () {
                var $this = $(this);
                $this.parents('.select-about-both').hide();
                _this.myGrade.parents('.select-about-both').show().find('.select-right-active>span').hide();;
            });



            // 补充 点击选课成功以后的弹窗里面的详情
            $("#gradeSelectSuccess .success-action a").on('click', function () {
                var $this = $(this);
                $this.parents('.fix-full-screen').hide();
                new GradeDetail($(document.body)).init({coursingId: $this.data('id')});
                $("#spaGrade").show().siblings('.slide-which').hide();
                _this.toggleMenu();
            })

            // 初始化看是只能选1v1(暂不上课)的那种情况还是能正常切换的(这个初始化是必要的）
            $(".select-grade-1v1").show();
            $(".select-1v1-only").hide();
        },

        /*新增初始化页面的时候哪些元素显示哪些元素隐藏避免干扰*/
        initShowOrHide: function () {
            var _this = this;
            // 第一步：让选好的容器隐藏
            _this.hasSelectedGrade.parent('.select-about-both').hide();
            // 第二步：让备选的容器显示
            _this.myGrade.parents('.select-about-both').show();
        },

        /*查询可选课程相关的*/
        initGradeCourse: function (courseDate) {
            var _this = this;
            // 在document上提前注册一个自定义事件在loadMycourse方法里面去调用
            this.element.on('gradeCourse.loaded', function (event, datas) {
                // 请求成功调用renderMyCourse去拼接字符串
                _this.renderGradeCourse(datas);
            })
            _this.loadMyGradeCourse($('body').data('maxgradeprice'), courseDate);
        },

        renderGradeCourse: function (data) {
            var _this = this;
            var gradeCourseArr = [];
            if (data.length>0) {// 此时有课时
                $.each(data, function (index, item) {
                    var isOnLine = null;
                    $.each(item.prices, function (indexInner, itemInner) {
                        if (itemInner.togetherCount == 1) {
                            isOnLine = itemInner.type.id;// id 是1标示线下  0 表示线上
                            if (isOnLine) {// 线下
                                gradeCourseArr.push('\
                            <li class="wait-selectd" data-id="', item.id, '" data-type="1">\
                                <!--right-icon-->\
                                <div class="right-icon fl"><span class="iconfont icon-duihao1"></span></div>\
                                <!--相关信息-->\
                                <div class="both-about-message fl">\
                                    <div class="h-name">', item.name, '</div>\
                                    <!--上课时间段范围-->\
                                    <div class="h-light">时间：', _this.gradeDateFormate(item.dates), '</div>\
                                    <!--如果是线下就渲染地点，如果是线上就渲染无(线上课程)-->\
                                    <div class="h-light">地点：', item.addressName, '</div>\
                                </div>\
                                <!--右侧信息-->\
                                <div class="about-course-price fr">\
                                    <div>', item.price, '元/人</div>\
                                    <div>', "线下课程", '</div>\
                                </div>\
                            </li>')
                            } else {
                                gradeCourseArr.push('\
                            <li class="wait-selectd" data-id="', item.id, '" data-type="0">\
                                <!--right-icon-->\
                                <div class="right-icon fl"><span class="iconfont icon-duihao1"></span></div>\
                                <!--相关信息-->\
                                <div class="both-about-message fl">\
                                    <div class="h-name">', item.name, '</div>\
                                    <!--上课时间段范围-->\
                                    <div class="h-light">时间：', _this.gradeDateFormate(item.dates), '</div>\
                                    <!--如果是线下就渲染地点，如果是线上就渲染无(线上课程)-->\
                                    <div class="h-light">地点：', "无限制(线上)", '</div>\
                                </div>\
                                <!--右侧信息-->\
                                <div class="about-course-price fr">\
                                    <div>', item.price, '元/人</div>\
                                    <div>', "线上课程", '</div>\
                                </div>\
                            </li>')
                            }
                        }
                    });

                })
                // 循环完成以后替换dom
                // console.log('我要渲染dom')
                this.myGrade.html(gradeCourseArr.join(''));


                // 关闭课时不足的容器，显示课时足的容器
                this.myGrade.parents('.select-about-both').show();
                this.notEnouthHour.parents('.select-about-both').hide();
                // 有grade-sure才有提交的点击事件
                this.gradeSureBtn.addClass('grade-sure');
                // 当有剩余课时的时候才初始化该方法，课时不足的时候不用初始化
                this.initSubmitGrade();
            } else {// 此时课时不足


                // 显示课时不足的容器，关闭课时足的容器
                this.myGrade.parents('.select-about-both').hide();
                this.notEnouthHour.parents('.select-about-both').show();
                // 没有这个类名则没有点击去提交的事件
                this.gradeSureBtn.removeClass('grade-sure');
                console.log('小班剩余课时不足')
            }

        },

        loadMyGradeCourse: function (priceScope, date) {
            var _this = this;
            $.ajax({
                url: 'http://member.breadoffer.com/course/coursing/select?t=' + new Date().getTime(),
                type: 'GET',
                data: {
                    type: '1',
                    price: priceScope,
                    date: date
                },
                dataType: 'json',
                success: function (result) {
                    var data = result.data;
                    _this.element.trigger('gradeCourse.loaded', [data]);
                }
            })
        },

        /*点击确定上课时候的提交请求*/
        initSubmitGrade: function () {
            var _this = this;
            this.gradeSure.on('click', function () {
                // 如果没有选择课程的话提示他选择课程否则的话发送选课接口
                if (_this.hasSelectedGrade.find('li .select-right-active').length == 0) {
                    $(".grade-empty").show();
                } else {
                    $(".grade-empty").hide();
                    _this.loadSubmit();
                }
            })
        },
        loadSubmit: function () {
            var _this = this;
            $.ajax({
                url: 'http://member.breadoffer.com/course/select',
                type: 'POST',
                data: {
                    //先写死测试一下 小班课程要传递两个参数 1. 课程id 2.课程类型(看是小班还是一对一)
                    courseId: $("#hasSelectedGrade li").data('id'),
                    gradeType: $("#hasSelectedGrade li").data('type')
                },
                dataType: 'json',
                success: function (result) {
                    if (result.code == 200) { // 成功以后的操作
                        var data = result.data;

                        // 成功以后回填
                        var schdata = {};
                        schdata['start'] = data.beginTime;
                        schdata['end'] = data.endTime;
                        schdata['title'] = data.title;
                        schdata['state'] = 'unlock';
                        schdata['id'] = data.id;
                        schdata['courseType'] = 1;// 需要传递courseType
                        // 最后拼接完类似于: var schdata = { start: "2017-04-30", end: "2017-04-30", title: "我在测试"};
                        $('#calendar').fullCalendar('renderEvent', schdata, true);

                        // 给弹窗里面的详情绑定id
                        $("#gradeSelectSuccess .success-action a").data('id', data.id);


                        // 侧边栏折叠，成功以后的弹窗显示
                        _this.toggleMenu();
                        $("#gradeSelectSuccess").show();
                    } else { // 失败以后的操作
                        // console.log('选课失败')
                    }


                }
            })
        },

        toggleMenu: function ($selector) {
            var _this = this;
            var bodyEle = document.body;
            var isOpen = $(bodyEle).data('isOpen');
            console.log(isOpen)
            if (isOpen) {
                classie.remove(bodyEle, 'show-menu');
                $('.slide-which').hide();
                $(".grade-select-tab,.one2one-select-tab,.grade-alert-specil").hide();
                if ($selector && $selector.length > 0) $selector.hide();
            } else {
                classie.add(bodyEle, 'show-menu');
                if ($selector && $selector.length > 0) $selector.show();
            }
            $(bodyEle).data('isOpen', !isOpen);
        },

        /*普通日期格式化方法*/
        dateFormate: function (time) {
            var arr = time.split(' ')[0].split('-');
            var string = arr[0] + '.' + arr[1] + '.' + arr[2];
            return string;
        },

        /*小班日期格式化方法*/

        gradeDateFormate: function (date) {
            var _this = this;
            var dateArr = date;
            var str = '';
            for (var i = 0; i < dateArr.length; i++) {
                var item = dateArr[i];
                var itemOne = dateArr[0];
                if (i == 0) {
                    str = _this.dateFormate(itemOne);
                }
                if (i != 0) {
                    str += '、';
                    if (i != dateArr.length - 1) {
                        str += item.substring(8, 10);
                    } else {
                        // console.log(str)
                        str += item.substring(8, 10);
                    }

                }

            }
            return str;
        }


    };

    return SelectGrade;


});
