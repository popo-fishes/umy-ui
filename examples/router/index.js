import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/layoutIndex'
import componentTpl from '../components/layoutIndex/component'
import uTableRouter from './u-table-router'

Vue.use(Router)

// 组件页面相关
const components = [
    {
        path: 'updateLog',
        name: '更新日志',
        component: () => import('../pages/startComponentPage/updateLog.md')
    },
    {
        path: 'intro',
        component: () => import('../pages/startComponentPage/intro.md'),
        name: '介绍',
    },
    {
        path: 'installation',
        component: () => import('../pages/startComponentPage/installation.md'),
        name: '安装',
    },
    {
        path: 'quickstart',
        component: () => import('../pages/startComponentPage/quickstart.md'),
        name: '快速上手',
    },
    {
        path: 'noticeBefore',
        component: () => import('../pages/startComponentPage/noticeBefore.md'),
        name: '用前须知',
    },
    {
        path: 'i18n',
        component: () => import('../pages/startComponentPage/i18n.md'),
        name: '国际化',
    },
    ...uTableRouter
]

const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/wel/index'
        },
        {
            path: '/wel',
            component: Layout,
            children: [
                {
                    path: 'index',
                    name: '首页',
                    component: () => import('../pages/homeIndex')
                },
                {
                    path: 'component',
                    component: componentTpl,
                    name: '组件',
                    children: components
                }
            ]
        }
    ]
})

export default router
