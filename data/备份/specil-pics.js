importing(function (scope) {
    var htmlStr='<div id="iframewrapper">\n' +
        '        <iframe frameborder="0" id="iframeResult" name="iframeResult" src ="" style="display: none"></iframe>\n' +
        '        <iframe frameborder="0" id="iframeResultSecond" name="iframeResultSecond" src ="" style="display: none"></iframe>\n' +
        '    </div>';

    $("#hook-top-body").after(htmlStr);
    // 综采特殊需求
    setSubPrj('pics');
    var checkExamineUrl = makeAct('qa/info/queryInfoList');
    var editExamineUrl = makeAct('person/edit/queryEditList');
    var checkExamine = {
        init: function () {
            this.initFirstQuery();
            this.intervalQuery();
        },
        initFirstQuery: function () {
            var _this = this;
            $post(checkExamineUrl, null, function (res) {
                localData.set('examineCount', res.totalCount)
            });
        },
        audioPlay: function () {
            var _this = this;
            // 每次播放前让src置空
            document.getElementById("iframeResult").setAttribute('src', '')
            document.getElementById("iframeResult").setAttribute('src', './view/pics/qualityManage/audio-Examine.html?t=' + Date.now())
            console.log('audioPlay执行了')
        },
        // 每个一段时间去查询看有没有加的
        intervalQuery: function () {
            var _this = this;
            setInterval(function () {
                $post(checkExamineUrl, null, function (res) {
                    var oldCount = localData.get('examineCount'); // number类型
                    var newCount = res.totalCount; // number类型
                    if (newCount > oldCount) {
                        _this.audioPlay();
                        console.log('审核播放了---')
                        localData.set('examineCount', newCount)
                    }
                });
            }, 3000)
        }
    }
    checkExamine.init();
    /*--------------------------------------------------------------*/
    var editExamine = {
        init: function () {
            this.initFirstQuery();
            this.intervalQuery();
        },
        initFirstQuery: function () {
            var _this = this;
            $post(editExamineUrl, null, function (res) {
                localData.set('editCount', res.totalCount)
            });
        },
        editPlay: function () {
            var _this = this;
            // 每次播放前让src置空
            document.getElementById("iframeResultSecond").setAttribute('src', '');
            document.getElementById("iframeResultSecond").setAttribute('src', './view/pics/qualityManage/audio-edit.html?t=' + Date.now())
        },
        // 每个一段时间去查询看有没有加的
        intervalQuery: function () {
            var _this = this;
            setInterval(function () {
                $post(editExamineUrl, null, function (res) {
                    var oldCount = localData.get('editCount'); // number类型
                    var newCount = res.totalCount; // number类型
                    if (newCount > oldCount) {
                        _this.editPlay();
                        console.log('编辑播放了---')
                        localData.set('editCount', newCount)
                    }
                });
            }, 3000)
        }
    }
    editExamine.init();

});




