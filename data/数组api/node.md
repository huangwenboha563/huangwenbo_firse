# 数组方法总结和深入

## 方法都有哪些

### ES4的（分为能改变原数组和不能改变原数组的）

> push pop unshift shift splice reverse sort (能改变原数组的)

+ push (数组末尾追加->返回新数组的长度)

+ pop (数组末尾删除->返回被删除的元素)

+ unshift(数组开始添加->返回新数组的长度)

+ shift(数组开始删除->返回被删除的元素)

+ splice(既可以删除也可以增加)

    ```javascript
        arr.splice(index,number,item)
        index 表示从数组的第几个元素开始删除
        number 表示删除几个
        item 表示删除后添加的元素
        返回值是被删除元素组成的数组
        arr.splice(1,2) // 从索引为1的元素开始删除两个
        arr.splice(1,2,'x','y') // 从索引为1的元素开始删除两个并插入两个新的值
        arr.splice(1,0,'z') // 从索引为1的元素开始删除0个元素并增加一个新元素(这就是增加)
    ```

+ reverse(把数组中的元素进行倒叙排列)
    ```javascript
        let arr = [1,2,3,4];
        console.log(arr.reverse()) // [4,3,2,1]
        console.log(arr) // [4,3,2,1]
    ```

+ sort (返回值为排序后的数组)

    ```javascript
        let arr = [13,4,2,6,7,9,1,90,34,78,23];
        arr.sort(function(a,b){
            return a-b; // 从小到大排列 b-a的话就是从大到小排列了
        });
        console.log(arr);
        console.log(arr.sort(function(a,b){
            return a-b;
        }));
    ```

> indexOf lastIndexof concat slice（不能改变原数组的）
 
+ indexOf

    ```javascript
    let arr = ['orange', '2016', '2016'];

    arr.indexOf('orange'); //0
    arr.indexOf('o'); //-1

    arr.indexOf('2016'); //1
    arr.indexOf(2016); //-1
    ```

+ lastIndexof

+ concat

    ```javascript
        let arr1 = [1,2,3];
        let arr2 = [4,5,6];
        arr.concat(arr2);// 为[1,2,3,4,5,6]
        console.log(arr.concat(arr2))// [1,2,3,4,5,6]
    ```

+ slice

    ``` javascript
    let arr = [0,1,2,3,4];
    arr.slice(0,2) // [0,1]
    从索引为0的开始截取到索引为2(但是不包括2);
    arr.slice(0,3) // [0,1,2]
    arr.slice(0) // [0, 1, 2, 3, 4] // 快速复制一个数组
    arr.slice() // [0,1,2,3,4]
    ```

### ES5的

> forEach filter map some every reduce

### ES6的

> includes find