// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App' // 不写.vue后缀可以
import router from './router' // 会引入当前路径下的 router文件夹下的index.js
// 轮播库
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
// fastclick
import fastClick from 'fastclick'

// reset.css
import  './assets/css/reset.css'
// border.css 1像素边框解决方案
import  './assets/css/border.css'

// 轮播css
import 'swiper/dist/css/swiper.css'
// 阿里妈妈图标库
import  './assets/iconfont/iconfont.css'

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#myApp', // 根实例
  router: router, // es6简写为:router
  store: store,
  components: {App: App}, // 1.局部组件通过bable或者webpack使用es6模块； 2.es6简写为：App
  template: '<App></App>' // 把 App这个局部组件渲染在页面上
});
