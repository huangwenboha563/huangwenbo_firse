/**
 * Created by huangwenbo on 18/7/30.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
// 导出来的是一个Vuex的实例
export default new Vuex.Store({
  state: { // 存放公用数据
    city: '稷山'
  },
  /*actions: {
    changeCity (ctx, city) {
      // console.log(city);
      ctx.commit('changeCity',city);
    }
  },*/
  mutations: {
    changeCity (state, city) {
      state.city = city;
    }
  },
  getters:{}
});

/*
* 每一个Vuex的核心就是store（仓库）。
* store基本上就是一个容器
* 再次强调，我们通过提交mutation的方式，而非直接改变store.state.count,是因为我们想要更明确地追踪到状态的变化，这个简单的约定能够让你的意图更加明显，
* Vuex使用单一状态树，是的用一个对象就包含了全部的应用层级状态。至此它便作为一个唯一数据源而存在，这也意味着每个应用将仅仅包含一个store实例。单一状态树让我们能够直接定位任一特定的状态判断，
* 在调试的过程中也能轻易地取得整个当前应用状态的快照。
* 单状态树和模块化并不冲突，在后面的章节中，我们会讨论如何将状态和状态变更事件分布到各个子模块中。
*
*
*
*/
