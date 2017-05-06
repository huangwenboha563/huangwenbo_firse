function Fn() {
	this.name = 'hwb';
}

Fn.prototype = {
	init:function () {
		var _this = this;
		_this.test();
		_this.load();
	},
	add:function () {
		console.log('haha')
	},
	test:function () {
		// 给document上注册一个自定义事件
		$(document.body).on('list.load', function(event) {
					console.log('看你行不行')
		})
	},
	load:function () {
		$(document.body).trigger('list.load');
	}
}