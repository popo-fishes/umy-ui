// 状态管理入口
export const state = () => ({
  componentActive: false, // 当前页面是否属于组件
  url: '', // 保存当前url
})

export const mutations = {
  // 设置当前url路径
  SETURL (state, data) {
    state.url = data.url
    state.componentActive = data.fals
  }
}

export const actions= {}
