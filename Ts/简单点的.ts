// let b = '3';
// function add(aa,b) {
//     return aa+b;
// }
//
// console.log(add(5, 6));
// let a:string = '44444444444'
let a:boolean = false;
let b:number = 9;
let firstName:string = 'liukuan';
let firstName2:string = `liukuan2`;
let u:undefined = undefined;
let n:null = null;


// 如何理解这个呢？undefined和null是所有类型的子类型。看这个
let bb:number = null;
let cc:string = undefined;




// 来看一个神奇的类型 下面的都不会报错。如果都是any的话就没什么意义了哈哈  万金油
let dd:any = 1;
dd = 11;
let ddd:any = '1';
ddd = '11';
let dddd:any = true;
dddd = false;
let ddddd:any = undefined;
ddddd = null;
/*dd.getName();
dd.cnim;*/
// ------------------------数组，将同一类型的数据放在一起
// 数组 数字类型的数组，表示数组里面的每个元素都必须是数字
let ary:number[] = [1,2,3,5];
// ary.push('d') 就会报错  只能push 数字
function test() {
    // IArguments是一个内置类型
    let arys:IArguments = arguments;
    console.log(arys);
}




// 元祖（函数式编程）
let user:[string,number] = ['刘宽',18]
user.push('刘阔')
user.push(5)
console.log(user);
// push不是string和number的时候就报错
// user.push(true);
console.log(777)

let demo = [];





























































