/**
 * Created by huangwenbo on 18/7/30.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
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
  }
});
