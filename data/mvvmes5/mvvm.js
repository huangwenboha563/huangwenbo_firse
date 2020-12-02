function Zhufeng(options = {}) {
    this.$options = options; // 将属性挂在在$options上
    var data = this._data = this.$options.data;
    // 数据劫持
    observe(data)
    // 实现this.  代理了this._data.
    for (let key in data) {
        Object.defineProperty(this, key, {
            enumerable: true,
            get() {
                return this._data[key]; // this.school = {name:'sss'}
            },
            set(newVal) {
                this._data[key]  = newVal;
            }
        })
    }
    new Compile(options.el,this)
}
function Compile(el,vm) {
    // el表示替换的范围
    vm.$el = document.querySelector(el)
    let fragment = document.createDocumentFragment()
    //全部移到内存中去
    while(child = vm.$el.firstChild) {
        fragment.appendChild(child)
    }
    replace(fragment)
    function replace(fragment) {
        Array.from(fragment.childNodes).forEach(function(node){ // 循环每一层
            let text = node.textContent;
            let reg = /\{\{(.*)\}\}/
            if (node.nodeType == 3 && reg.test(text)) {
                // console.log(RegExp.$1) // school.name     level
                let arr = RegExp.$1.split('.'); // [school,name]
                let val = vm;
                arr.forEach(function(k){ // 取this.school.name
                    val = val[k]
                });
                node.textContent = text.replace(/\{\{(.*)\}\}/,val)
                console.log('val->',val);
            }
            if (node.childNodes) {
                replace(node)
            }
        })
    }

    vm.$el.appendChild(fragment)

}
// 观察对象给对象增加Object.defineProperty
function Observer(data) { // 这里我们写主要逻辑
    for (let key in data) {
        let val = data[key];
        // 递归，二次进行数据劫持，对象里面套对象
        observe(val)
        /*
        * 这里进行深度递归的原因是，
        * 如果不递归->第一层只给 school 增加了get和set
        * 如果递归->也会给school里面的name增加了get和set
        */
        Object.defineProperty(data, key, {
            enumerable: true,
            get() {
                return val;
            },
            set(newVal) { // 更改值的时候
                if (newVal == val) { // 设置的值和一样
                    return;
                } else {
                    val = newVal; // 如果以后再获取的时候将设置的新值在丢回去
                    observe(newVal)
                    /*
                    * 这里set的时候为什么要进行observe
                    * 比如
                    * zhufeng._data.school = {nameX:'hehe'},也要给nameX增加上get和set
                    */
                }
            }
        })
    }
}

function observe(data) {
    if (typeof data !== 'object') {
        return
    }
    return new Observer(data)
}

// vue特点，不能新增不存在的属性，不存在的属性没有get和set
// 深度响应  因为每次赋予一个新对象时都会给这个新对象增加数据劫持
