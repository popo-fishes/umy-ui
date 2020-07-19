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
    import tableMenuData from '../../utils/table-menu-data'
    // 二级固定
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
                    ...tableMenuData
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
