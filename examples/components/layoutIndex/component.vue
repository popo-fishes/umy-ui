<template>
    <div class="page-component width100 height100">
        <el-scrollbar class="page-component__nav">
            <div class="jump-link">
                <a href="https://uviewui.com/" target="_blank">
                    <img src="../../assets/uview.png">
                </a>
            </div>
            <p class="title-pl beyond"
               :class="{ active: activeUrl === basics + 'updateLog' }"
               @click="navLink({url: 'updateLog'})"
               style="margin-top: 15px;margin-bottom: -5px;cursor: pointer">更新日志</p>
            <!--组件列表-->
            <div class="menuList">
                <div class="item-pl" v-for="(item, index) in componentsData" :key="index">
                    <p class="title-pl beyond" :title="item.title">
                        {{ item.title }}
                        <span class="u-table-word-icon"
                              @click="openCom(item.show, index)"
                              v-if="item.title !== '起步'">
                            <i :class="[item.show ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i>
                        </span>
                    </p>
                    <!--如果当前是展开状态 或者是“起步” 就直接展示子集-->
                    <ul class="list-pl" v-if="item.show || item.title === '起步'">
                        <li class="nav-item-c"
                            v-for="(child, inx) in item.list"
                            @click="navLink(child)"
                            :title="child.title"
                            :class="{ active: activeUrl === basics + child.url }"
                            :key="inx">
                            {{ child.title }}
                        </li>
                    </ul>
                </div>
            </div>
        </el-scrollbar>
        <div class="page-component__content">
            <router-view class="content" :class="{ 'customMdclass': mdStyle }"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "component",
        data () {
            return {
                basics: '/wel/component/',
                // show代表默认展开与否
                componentsData: [
                    {
                        title: '起步',
                        list: [
                            {title: '介绍', url: 'intro'},
                            {title: '安装', url: 'installation'},
                            {title: '快速上手', url: 'quickstart'},
                            {title: '国际化', url: 'i18n'},
                            {title: '用前须知', url: 'noticeBefore'}
                        ]
                    },
                    {
                        title: '基础表格',
                        show: false,
                        list: [
                            {title: '基础用法', url: 'basicUsage'},
                            {title: '固定列表格', url: 'gudinglie'},
                            {title: '多级头表格', url: 'multiLevelMeter'},
                            {title: '表尾合计行', url: 'totalTable'},
                            {title: '展开行', url: 'rxpandRow'},
                            {title: '树形数据与懒加载', url: 'treeTable'},
                            {title: '多选表格', url: 'checkboxTable'},
                            {title: '筛选表格', url: 'screenTable'},
                            {title: '合并行或列', url: 'mergeRowsOrColumns'},
                            {title: '带分页的表格', url: 'tableWithPagination'},
                            {title: '筛选字段侧滑弹窗', url: 'filterFields'},
                            {title: '美化表格', url: 'beautifyTable'}
                        ]
                    },
                    {
                        title: '虚拟表格',
                        show: false,
                        list: [
                           {title: '虚拟滚动', url: 'virtualScrolling'},
                           {title: '数据变化', url: 'dataChangesTable'},
                           {title: '分组表头', url: 'groupHeader'},
                           {title: '虚拟滚动多选框', url: 'virtualCheckboxTable'},
                           {title: '虚拟树形表格', url: 'virtualTreeTable'},
                           {title: '列和行同时虚拟', url: 'columnsAndRows'},
                           {title: 'plx多级头', url: 'multistageHeadPlx'},
                           {title: '反转列和行', url: 'reverseTable'}
                        ]
                    },
                    {
                        title: '编辑表格',
                        show: false,
                        list: [
                            {title: '基本的编辑（点击触发）', url: 'basicEditTable'},
                            {title: '手动触发', url: 'manualTrigger'},
                            {title: '插入行', url: 'InsertRow'}
                        ]
                    },
                    {
                        title: '表格的API',
                        show: false,
                        list: [
                            {title: 'u-table', url: 'u-table-api'},
                            {title: 'u-table-column', url: 'u-table-column-api'},
                            {title: '分页和侧滑弹窗', url: 'paginationAndSideslipFrame'},
                            {title: 'ux-grid', url: 'plxGridApi'}
                        ]
                    }
                ]
            }
        },
        computed:{
            activeUrl () {
                return this.$store.state.url
            },
            // 判断是否为自定义的md api页面，然后写不同的样式
            mdStyle () {
                const url = this.$store.state.url
                return url === '/wel/component/u-table-column-api' ||
                    url === '/wel/component/paginationAndSideslipFrame'
            },
        },
        methods: {
            openCom (fals, index) {
              this.componentsData[index].show = !fals
            },
            navLink (row) {
                if (row.url) {
                    this.$router.push({
                        path: this.basics + row.url
                    })
                }
            }
        }
    }
</script>

<style scoped lang="scss">
 .page-component{
     .page-component__nav {
        width: 250px;
        padding-left: 30px;
        z-index: 100;
        left: 0;
        background-color: white;
        border-right: 1px solid #eaecef;
        position: fixed;
        top: 57px;
        height: calc(100% - 66px);
        bottom: 0;
        transition: padding-top .3s;
        .jump-link {
            background-color: #ebebeb;
            width: 190px;
            margin-top: 20px;
            height: 75px;
            a{display: block;}
            img {width: 100%;height: 100%;}
        }
    }
     .page-component__content {
         padding-left: 260px;
         padding-bottom: 100px;
         min-width: 1200px;
         max-width: 1400px;
         overflow-x: auto;
         box-sizing: border-box;
         .content {padding-top: 30px;}
     }
     .title-pl {
         font-size: 16px;
         color: #333;
         font-weight: 700;
         line-height: 40px;
         height: 40px;
     }
     .active {
         color: $dh-color;
     }
     .menuList {padding-top: 10px;
         .list-pl {
          .nav-item-c {
              display: block;
              height: 36px;
              color: #444;
              line-height: 36px;
              font-size: 14px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-weight: 400;
              padding: 0;
              border: none!important;
              &:hover{
                  color: $dh-color;
                  cursor: pointer;
              }
          }
          .active {
              color: $dh-color;
          }
        }
     }
 }
</style>
