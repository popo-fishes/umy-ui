import 'babel-polyfill' // 引入填充库,解决IE不能显示的问题
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import router from './router'
import store from './vuex'
import ElementUI from 'element-ui';
import highlightJs from 'highlight.js'
import './permission'
import './themes/hightlight.scss'
import 'element-ui/lib/theme-chalk/index.css';

// 测试
// import '../lib/theme-chalk/index.css'
// import UmyUi from '../lib/umy-ui.common'
// 开发
import '../theme/index.scss'
import UmyUi from '../index'

// console.log(UmyUi)
// Vue.use(UTableColumn)
// Vue.use(UTable)
// Vue.use(UxGrid)
// Vue.use(UxTableColumn)

Vue.use(UmyUi)
Vue.use(ElementUI)

router.afterEach(() => {
    Vue.nextTick(() => document.querySelectorAll('pre code').forEach(block=>highlightJs.highlightBlock(block)))
})

// router版本大于3.1.0
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
