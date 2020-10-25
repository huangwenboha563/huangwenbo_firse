# es6中的类和对象

+ 面向对象的思维特点

  * 抽取对象公用的属性和行为组织成一个类
  * 对类进行实例化，获取类的对象
+ 创建一个类
>
>
>username age等是**实例属性**
>
>还有一个属性叫**静态属性**
>
>在class内部通过static修饰的属性，就是静态属性
>
>console.log(Star.address)// 打出来的是静态属性

```
class Star {
    // 构造函数，接受参数，返回实例，只要new就会自动执行
    constructor (uname,age){
        this.uname = uname;
        this.age = age;
    }
    // 静态方法
    static eat  () {
    
    }
    // 静态属性
    static address = "金茂府"
    // 明星一般都会唱歌，不需要function关键字，方法之间也不需要 ，
    sing (song) { // sing方法也是实例方法，也是体现在原型上面
        console.log('我会唱',song)
    }
}
var xx = new Star('刘德华')
console.log(xx) // 打出来看看
console.log(xx.uname)  // username age等是实例属性
console.log(xx.sing('小苹果'))
console.log(Star.address)// 打出来的是静态属性
```
+ 继承

> extends 关键词 

```
class Father {
    constructor () {
        
    }
    money () {
        console.log(100)
    }
}
// 继承父类的属性和方法
class Son extends Father {
    
}
var son = new Son();
son.money()
```
> super关键字
>
> 1.为什么一定要在constructor中调用super
>
> 因为如果一个子类通过extends继承了父类，name在子类的constructor中必须优先调用一下super(),没有太多的为什么语法规定
>
> 2.super是个什么东西
>
> super（）是个函数，而且它是父类的构造器，子类中的super其实就是父类中constructor的引用
>
> 3.为什么调用了super()之后，实例上的x y 都变成undefined了
>
> super()里面没传递参数啊，new 一个类的时候优先执行了constructor所以super(x,y)这样就调用了父类的构造器

```
class Father {
    constructor (x,y) {
        this.x = x;
        this.y = y;
    }
    say () {
        return '我是父亲'
    }
    sum () {
        console.log(this.x +  this.y)
    }
}
// 继承父类的属性和方法
class Son extends Father {
    constructor (x,y) {
       super(x,y); // 调用了父类中的构造函数(也可以调用父类的普通函数)
      
    }
    say () {
        // console.log('我是儿子')
        // super.say()就是调用父类中的普通函数
        console.log(super.say() + '的儿子')
    }
}
var son = new Son(1,2);
son.sum()
son.say();
// 查找原则，就近原则
// 继承中，如果实例化子类调用一个方法，先看子类有没有这个方法，如果有就先执行子类的
// 如果子类没有，就去查找父类有没有这个方法，如果有再执行，也就是就近原则
```

```
// 儿子有自己的减法方法，还想用父亲的加法方法
class Father {
    constructor (x,y) {
        // 这里的this指向的是创建的实例对象
        this.x = x;
        this.y = y;
    }
    sum () {
        // 共有的属性一定要加this
        // 注意方法里面的this指向的是方法的调用者，不一定是实例对象。比如是一个按钮调用？
        console.log(this.x + this.y)
    }
}
class Son extends Father{
    constructor (x,y) {
        super(x,y)
        // 语法规定super(x,y)必须放在this.x = x 之前
        this.x = x;
        this.y = y;
    }
    // 减法
    sub () {
        console.log(this.x - this.y)
    }
}
// 必须先有class才能new  new 不能写在class定义之前
var son = new Son(10,7);
son.sub();
son.sum();
```

```
html

<button><button>


class Star {
    constructor (name,age) {
        this.name = name;
        this.age = age;
        var button = document.querySelector('button')
        button.onclick = this.sum;
    }
    sum () {
        console.log(this.name)
        // 注意这里打出来的是undefined，因为this已经发生了改变，这里的this其实是button，谁调用就是
    }
}
var lk = new Star('刘宽');



var that;
class Star {
    constructor (name,age) {
        that = this;
        this.name = name;
        this.age = age;
        var button = document.querySelector('button')
        button.onclick = this.sum;
    }
    sum () {
        console.log(that.name)
        // 借用that,这样打出来的才是刘宽
    }
}
var lk = new Star('刘宽');
```