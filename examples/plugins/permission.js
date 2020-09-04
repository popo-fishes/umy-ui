// 路由拦截
export default function ({ app, store, redirect }) {
  app.router.beforeEach((to, from, next) => {
    store.commit('SETURL', {
      fals: to.path.indexOf('/umycomponent/') !== -1,
      url: to.path
    })
    next()
  })
}
