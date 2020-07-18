import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../components/layoutIndex'
import componentTpl from '../components/layoutIndex/component'
Vue.use(Router)
// 表格的api
const apiComponent = [
    {
        path: 'u-table-api',
        component: () => import('../pages/plTableApi.vue'),
        name: 'u-table',
    },
    {
        path: 'u-table-column-api',
        component: () => import('../pages/plTableColumnApi.md'),
        name: 'u-table-column',
    },
    {
        path: 'paginationAndSideslipFrame',
        component: () => import('../pages/paginationAndSideslipFrame.md'),
        name: '分页和侧滑弹窗',
    },
    {
        path: 'plxGridApi',
        component: () => import('../pages/plxGridApi.vue'),
        name: 'plxGridApi',
    }
]
// 编辑表格
const editTypeTbalePage = [
    {
        path: 'basicEditTable',
        component: () => import('../pages/editTypeTbalePage/basicEditTable.md'),
        name: '基本的编辑',
    },
    {
        path: 'manualTrigger',
        component: () => import('../pages/editTypeTbalePage/manualTrigger.md'),
        name: '手动触发',
    },
    {
        path: 'InsertRow',
        component: () => import('../pages/editTypeTbalePage/InsertRow.md'),
        name: '插入行',
    }
]
// 虚拟滚动表格
const virtualScrolling = [
    {
        path: 'virtualScrolling',
        component: () => import('../pages/virtualTableUsage/virtualScrolling.md'),
        name: '虚拟滚动',
    },
    {
        path: 'dataChangesTable',
        component: () => import('../pages/virtualTableUsage/dataChangesTable.md'),
        name: '数据变化',
    },
    {
        path: 'groupHeader',
        component: () => import('../pages/virtualTableUsage/groupHeader.md'),
        name: '分组表头',
    },
    {
        path: 'virtualCheckboxTable',
        component: () => import('../pages/virtualTableUsage/virtualCheckboxTable.md'),
        name: '虚拟滚动多选框',
    },
    {
        path: 'virtualTreeTable',
        component: () => import('../pages/virtualTableUsage/virtualTreeTable.md'),
        name: '虚拟树形表格',
    },
    {
        path: 'columnsAndRows',
        component: () => import('../pages/virtualTableUsage/columnsAndRows.md'),
        name: '列和行同时虚拟'
    },
    {
        path: 'multistageHeadPlx',
        component: () => import('../pages/virtualTableUsage/multistageHeadPlx.md'),
        name: 'plx多级头'
    },
    {
        path: 'reverseTable',
        component: () => import('../pages/virtualTableUsage/reverseTable.md'),
        name: '反转列和行'
    }
]
// 基础表格
const basicTable = [
    {
        path: 'basicUsage',
        component: () => import('../pages/basicTableUsage/basicUsage.md'),
        name: '基础表格',
    },
    {
        path: 'gudinglie',
        component: () => import('../pages/basicTableUsage/gu-ding-lie.md'),
        name: '固定列表格',
    },
    {
        path: 'multiLevelMeter',
        component: () => import('../pages/basicTableUsage/multiLevelMeter.md'),
        name: '多级头表格',
    },
    {
        path: 'totalTable',
        component: () => import('../pages/basicTableUsage/totalTable.md'),
        name: '表尾合计行',
    },
    {
        path: 'treeTable',
        component: () => import('../pages/basicTableUsage/treeTable.md'),
        name: '树形数据与懒加载',
    },
    {
        path: 'checkboxTable',
        component: () => import('../pages/basicTableUsage/checkbox-table.md'),
        name: '多选表格',
    },
    {
        path: 'tableWithPagination',
        component: () => import('../pages/basicTableUsage/tableWithPagination.md'),
        name: '带分页的表格',
    },
    {
        path: 'filterFields',
        component: () => import('../pages/basicTableUsage/filterFields.md'),
        name: '筛选字段侧滑弹窗',
    },
    {
        path: 'beautifyTable',
        component: () => import('../pages/basicTableUsage/beautifyTable.md'),
        name: '美化表格',
    },
    {
        path: 'rxpandRow',
        component: () => import('../pages/basicTableUsage/rxpandRow.md'),
        name: '展开行',
    },
    {
        path: 'mergeRowsOrColumns',
        component: () => import('../pages/basicTableUsage/mergeRowsOrColumns.md'),
        name: '合并行或列',
    },
    {
        path: 'screenTable',
        component: () => import('../pages/basicTableUsage/screenTable.md'),
        name: '筛选表格',
    }
]
// 组件页面相关
const components = [
    {
        path: 'updateLog',
        name: '更新日志',
        component: () => import('../pages/updateLog.md')
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
    ...basicTable,
    ...virtualScrolling,
    ...apiComponent,
    ...editTypeTbalePage
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
