/*
* 声纹注册要用到的单位数
*/

/*带常用项的字典*/
var storage = {
    set: function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get: function (key) {
        return JSON.parse(localStorage.getItem(key));
    },
    remove: function (key) {
        localStorage.removeItem(key);
    }
};

function treeRegDictWidget3(label) {
    console.log('打出label', label);
    // 常用项
    var commonData = label + 'commonData';
    var cyx = storage.get(label + 'cyx');
    if (cyx && cyx.length > 0) {
        commonData = cyx;
    } else {
        commonData = [];
    }
    var sonParent = 'key';
    // console.log(label);
    if (label == 'cjUnit') { // 采集单位
        // var dictAct = makeAct('dict/getAllOrgCodes');
        var userUnit = top.currentUser.orgId;
        sonParent = 'code';
        var dictAct = makeAct('/sys/organises/' + userUnit + '/selfwithchildrendict', '', 'sso');
    }
    $.regDictWidget3(label, {
        okCallback: function (nodes) {
        },
        dictAsyncLoad: false,
        dictSetting: {
            data: {
                key: {
                    id: sonParent, // 110094400000 // 如果是采集单位的话，回填到页面隐藏域里面的就是code,如果是其他的话，回填到隐藏域里面的就是 key
                    name: 'value' // 某某派出所，肉眼看到的树的汉字
                },
                simpleData: {
                    enable: true, // 设置是否启用简单数据格式，标准格式是带children那种父子关系的，简单结构是平行数组
                    idKey: sonParent, // 110094400000    // idKey和pIdKey是简单数据格式时用来决定父子关系的
                    pIdKey: "parentKey", // 110094400000
                    rootPId: 0
                }
            },
            view: {
                addHoverDom: addHoverDom,
                addDiyDom: addDiyDom
            }
        },
        dictIsHasCommon: true,//是否是常用项字典 默认是非常用项字典
        dictAct: dictAct,
        dictActionType: 'get',//字典接口调用方
        dictCheckSetting: {
            check: {
                enable: true, // 设置 zTree 的节点上是否显示 checkbox / radio true / false 分别表示 显示 / 不显示 复选框或单选框
                chkStyle: "checkbox", // 勾选框类型(checkbox 或 radio）
                chkboxType: {"Y": "s", "N": "ps"}
            }
        },
        dictCommon: { //常用项字典
            isLocal: true //是否是本地常用项字典 如果是本地常用项字典不调接口 数据缓存再本地
        },
        dictDisabledRule: '',//节点禁用规则 这里直接传代码"treeNode.personFlag == '1'",  [treeNode.parentKey === ""]
    });

    //解析禁用规则
    function disabledRule(options, treeNode) {
        if (options.dictDisabledRule) {
            var disArr = eval('(' + options.dictDisabledRule + ')');
            var result = false;
            for (var i = 0; i < disArr.length; i++) {
                var item = disArr[i];
                if (item) {
                    result = true;
                    break;
                }
            }
            return result;
        } else {
            return false;
        }
    }

    function addHoverDom(treeId, treeNode) {
        var options = dict3Manager[$('#' + treeId).parents('.dictManagerContent').attr('dict-id')].options;
        if (!!treeNode && disabledRule(options, treeNode)) {
            $('#' + treeId).find('#' + treeNode.tId + '_a', '#' + treeNode.tId + '_a button', '#' + treeNode.tId).css('cursor', 'not-allowed').attr('title', '该节点不可选择！');
            return false;
        }
    }

    //自定义
    function addDiyDom(treeId, treeNode) {
        // console.log('你好',treeNode);
        var aObj = $("#" + treeNode.tId + "_a");
        if ($("#diyBtn_" + treeNode.tId).length > 0) return;
        var options = dict3Manager[$('#' + treeId).parents('.dictManagerContent').attr('dict-id')].options;
        if (!!treeNode && disabledRule(options, treeNode)) {
            $('#' + treeId).find('#' + treeNode.tId + '_a', '#' + treeNode.tId + '_a button', '#' + treeNode.tId).css('cursor', 'not-allowed').attr('title', '该节点不可选择！');
            return false;
        }
        // console.log(treeNode);
        /*if (treeNode.isParent) {
            return;
        }*/
        //var getNoticeInfoComm = makeAct('commonItem/{0}/getCommonItems').format(itemType);
        //$get(getNoticeInfoComm,function(res){
        var treeNodeCode = treeNode.code || treeNode.key; // 比如综采8.0就只有采集单位就有code，其他比如：案件类别，现住地区划等就没有code
        $(commonData).each(function (index, item) {
            if (item.itemCode == treeNodeCode) {
                treeNode.showSelected = true;
            }
        });

        if (treeNode.showSelected == true) {
            editStr = "<button type='button' class='diyBtn1 selected-common' itemCode='" + treeNodeCode + "' id='diyBtn_" + treeNode.tId
                + "' title='" + treeNode.value + "'></button>";
        } else {
            editStr = "<button type='button' class='diyBtn1' itemCode='" + treeNodeCode + "' id='diyBtn_" + treeNode.tId
                + "' title='" + treeNode.value + "'></button>";
        }
        aObj.append(editStr);
        var btn = $("#diyBtn_" + treeNode.tId);
        if (btn && aObj) {
            aObj.hover(function () {
                $(this).addClass('hover-common');
            }, function () {
                $(this).removeClass('hover-common');
            });
            btn.bind("click", function () {
                if ($(this).hasClass('selected-common')) { //取消收藏
                    $(this).removeClass('selected-common');
                    var itemCode = treeNodeCode;
                    $.each(commonData, function (index, item) {
                        if (itemCode == item.itemCode) {
                            commonData.splice(index, 1);
                        }
                    });
                    storage.set(label + 'cyx', commonData);
                    $("#popup-" + label + " .dict-common-list li[dictkey='" + treeNodeCode + "']").remove();

                } else { //加入收藏
                    $(this).addClass('selected-common');
                    var itemCode = treeNodeCode;
                    var itemName = treeNode.value;
                    var bool = $("#popup-" + label + " .dict-common-top .showBefore").is(":visible"),
                        liTemp;
                    if (bool) {
                        liTemp = '<li class="fl" dictvalue="' + treeNode.value + '"  dictkey="' + itemCode + '">' + treeNode.value + '<i class="h-cancel del-single-pics" title="删除"></i></li>';
                    } else {
                        liTemp = '<li class="fl showClose" dictvalue="' + treeNode.value + '"  dictkey="' + itemCode + '">' + treeNode.value + '<i class="h-cancel del-single-pics" title="删除"></i></li>';
                    }
                    $("#popup-" + label + " .dict-common-list").append(liTemp);
                    commonData.push({
                        itemCode: itemCode,
                        itemName: itemName
                    });
                    storage.set(label + 'cyx', commonData);
                }
            })
        }
        setTimeout(function () {
            queryCommon();
        }, 2000)
    }

    //查询常用项(从本地localStorage里面获取)
    function queryCommon() {
        var utemp = '<ul class="clearfix dict-common-list">';
        for (var i = 0; i < commonData.length; i++) {
            utemp += '<li class="fl"' +
                ' dictkey ="' + commonData[i]['itemCode'] + '"' +
                ' dictvalue ="' + commonData[i]['itemName'] + '"' +
                '>' + commonData[i]['itemName'] + '<i class="h-cancel del-single-pics" title="删除"></i></li>';
        }
        utemp += "</ul>";
        $('#popup-' + label + ' .dict-common-list').remove();
        $('#popup-' + label + ' .dict-common-con').append(utemp);
        commonEventBind.call("#popup-" + label + " .dict-common-con");
        // commonEventBind.call('body');  这样写也可以
        // commonEventBind() 这样写就行
        // commonEventBind.call("#popup-" + label + " .dict-common-con"); // 把这个方法放在外面执行，不在queryCommon最后执行
    }

    //常用项事件
    function commonEventBind(options) {
        //全删
        $(".h-delete.del-all").off("click").on("click", function () {
            var $this = $(this);
            $this.parents(".dict-common-top").next().find("li").remove();
            $(".diyBtn1").removeClass("selected-common");
            storage.remove(label + 'cyx');
            commonData = [];
            return false;
        });

        //单个删除
        $(document.body).on('click', '.h-cancel.del-single-pics', function () {
            // console.log('我点击了单个删除');
            var $this = $(this);
            var itemCode = $(this).parent().attr("dictkey");
            $this.parent().remove();
            $("button[itemCode='" + itemCode + "']").removeClass("selected-common");
            $(commonData).each(function (index, item) {
                if (item.itemCode == itemCode) {
                    commonData.splice(index, 1);
                    storage.set(label + 'cyx', commonData);
                }
            });
            return false;
        });
        /*$(".h-cancel.del-single-pics").off("click").on("click", function () {

        })*/
    }
}
