class Compiler {
    constructor(el, vm) {
        // 判断el是不是一个元素，如果不是元素那就获取它
        this.el = this.isElementNode(el) ? el : document.querySelector(el);
        // console.log(this.el);
        // 把当前节点中的元素 获取到 放到内存中
        this.vm = vm;
        // 把#app下所有的节点拷到内存中去
        let fragment = this.node2fragment(this.el)
        // 把节点中的内容进行替换
        // 编译模板 用数据编译
        this.compile(fragment)
        // 把内容再塞到页面中
        this.el.appendChild(fragment)
    }

    // 是不是元素节点(看有没有v-model之类的)
    isElementNode(node) {
        return node.nodeType === 1
    }
    // 判断是不是指令
    isDirective(attrName) {
        // console.log(attrName);
        return attrName.startsWith('v-')
    }

    // 编译元素(看有没有{{}})
    compileElement(node) {
        let attributes = node.attributes // 类数组
        // console.log(attributes);
        // console.log(Array.from(attributes));
        Array.from(attributes).forEach(attr => { // type="text" v-model="school.name"
            let {name, value: expr} = attr
            // console.warn(attr);
            // console.log(attr.name);
            // console.log(name);
            // 判断是不是指令(带不带v-)
            if (this.isDirective(name)) { // 说明是true
                // alert(1)
                // console.log('node->',node);
                let [, directive] = name.split('-')
                // 需要调用不同的指令来处理
                CompileUtil[directive](node, expr, this.vm)
            }
        })

    }

    // 文本节点
    compileText(node) { // 判断当前文本节点中是不是包含{{}}
        let content = node.textContent
        // console.log(content);
        // 熟悉这个正则
        if (/\{\{(.+?)\}\}/.test(content)) {
            // console.log(content)
            CompileUtil['text'](node, content, this.vm)
        }
    }

    // 用来编译内存中的dom节点
    compile(node) {
        let childNodes = node.childNodes
        // console.log(childNodes); // 9个 是个类数组
        console.log(childNodes);
        Array.from(childNodes).forEach(child => {
            // console.warn(child.nodeType);
            if (this.isElementNode(child)) { // 元素节点
                // console.log('element');
                this.compileElement(child)
                // 如果是元素 需要把自己传进去 再去遍历子节点
                // console.log(child);
                this.compile(child)
            } else { // 文本节点
                this.compileText(child)
            }
        })
    }

    // 把节点移到内存中
    node2fragment(node) {
        // alert(1)
        let fragment = document.createDocumentFragment()
        // console.log(fragment);
        let firstChild = null;
        // console.log(firstChild);
        // console.log(node.firstChild);
        // console.log(firstChild = node.firstChild);
        // fragment.appendChild(firstChild)
        while (firstChild = node.firstChild) {
            // console.log(firstChild)
            // console.warn(node.firstChild)
            // appendChild具有移动性
            fragment.appendChild(firstChild)
        }
        return fragment
    }
}

CompileUtil = {
    // 根据表达式取到对应的数据
    getVal(vm, expr) { // vm.$data 'school.name' [school,name]
        return expr.split('.').reduce((data, current) => {
            return data[current]
        }, vm.$data)
    },
    // 给输入框赋予value属性  node.value = xxx
    model(node, expr, vm) { // node是节点 expr是表达式（school.name） vm是当前实例(vm.$data)
        let fn = this.updater['modelUpdater']
        let value = this.getVal(vm, expr) // 珠峰
        fn(node, value)
    },
    html() { // node.innerHTML = xxx

    },
    text(node, expr, vm) { // expr({{school.name}} {{b}} {{c}})
        let fn = this.updater['textUpdater']
        let content = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
            return this.getVal(vm, args[1])
        })
        fn(node, content)
    },
    updater: {
        // 把数据插到节点中 v-model
        modelUpdater(node, value) {
            node.value = value
        },
        // v-html
        htmlUpdater() {

        },
        // 处理文本节点
        textUpdater(node, value) {
            node.textContent = value
        }
    }
}

// 实现是数据劫持...
class Observer {
    constructor(data) {
        // console.log(data);
        this.observer(data)
    }

    observer(data) {
        // 如果是对象才观察
        if (data && typeof data == 'object') { // 递归终止条件...
            // 如果是对象
            for (let key in data) {
                this.defineReactive(data, key, data[key])
            }
        }
    }

    defineReactive(obj, key, value) {
        this.observer(value)
        Object.defineProperty(obj, key, {
            get() {
                return value
            },
            set: (newVal) => {
                if (newVal != value) {
                    this.observer(newVal)
                    value = newVal
                }
            }
        })
    }
}

// 基类 调度
class Vue {
    constructor(options) {
        // this.$el $data $options
        this.$el = options.el // '#app'
        this.$data = options.data // {school:{name:'珠峰',age:10}}
        // 根元素存在 编译模板
        if (this.$el) {
            // 把数据全部转化成Object.defineProperty来定义(~数据劫持~)
            new Observer(this.$data)
            // 编译模板
            new Compiler(this.$el, this)
        }
    }
}
