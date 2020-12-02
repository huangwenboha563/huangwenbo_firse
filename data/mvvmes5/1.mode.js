// 发布订阅模式  // 现有订阅，再有发布 [fn1,fn2,fn3]
// 发布订阅看这里,发布订阅看这里
// 绑定的方法，都有一个update属性 fn1有个update,fn2也有自己的update
/*
*观察者和发布者都是new出来的
*/
    function Dep() {
        this.subs = []; // 事件池
    }

    Dep.prototype.addSub = function (sub) { // 订阅
        this.subs.push(sub);
    }

    Dep.prototype.notify = function () {
        this.subs.forEach(function (sub) {
            return sub.update();
        })
    }
    // 观察
    function Watcher(fn) { // watcher是一个类，通过这个类创建的实例都拥有update犯法
        this.fn = fn;
    }

    Watcher.prototype.update = function () {
        this.fn();
    }

    let watcher = new Watcher(function(){ // 监听函数
        // 每个观察者身上都有一个update方法，update方法
        console.log(1)
    })
    let dep = new Dep();
    // 订阅
    dep.addSub(watcher) // 将wather放到了数组中，watcher上有个update
    dep.addSub(watcher) // 将wather放到了数组中，watcher上有个update
    console.log(dep.subs);
    // 发布
    dep.notify()
