import router from './router'
import store from './vuex'
router.beforeEach((to, from, next) => {
  store.commit('SETURL', {
      fals: to.path.indexOf('/wel/component/') !== -1,
      url: to.path
  })
  next()
})
