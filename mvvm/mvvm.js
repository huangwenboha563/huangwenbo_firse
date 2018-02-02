/**
 * Created by Administrator on 2018/2/1.
 */
function Zhufeng(options = {}){
	this.$options = options;// 降所有属性挂载到了$options
	var data = this._data = this.$options.data;
	observe(data);
	// this 代理了
	for (let key in data) {
		Object.defineProperty(this,key,{
			enumerable:true,
			get() {
				return this._data[key];
			},
			set(newVal) {
				this._data[key] = newVal;
			}
		})
	}
}
// 观察对象给对象增加ObjectdefineProperty
function Observe(data) { // 这里写我们的主要逻辑
	for (let key in data) {
		let val = data[key];
		observe(val);
		Object.defineProperty(data,key,{
			enumerable:true,
			get() {
				return val;
			},
			set(newVal) { // 更改值的时候
				if (!newVal === val) {// 设置的值和以前是一样的
					val = newVal;
					observe(newVal);
				}
			}
		})
	}
}
function observe(data) {
	return new Observe(data);
}
// vm.$options
// vue特点，不能新增不存在的属性，不能存在的属性没有get和set
// 为什么可以实现深度相应，每次赋予一个新对象时，会给这个新对象增加数据劫持defineProperty