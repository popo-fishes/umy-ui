import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    componentActive: false, // 当前页面是否属于组件
    url: '', // 保存当前url
  },
  mutations: {
    // 设置当前url路径
    SETURL (state, data) {
        state.url = data.url
        state.componentActive = data.fals
    }
  },
  actions: {}
})
