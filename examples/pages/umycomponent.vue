<template>
    <div class="page-component width100 height100">
        <el-scrollbar class="page-component__nav">
            <div class="jump-link">
                <!--<el-button plain @click="dialogVisible = true">成为赞助商</el-button>-->
                <a href="http://www.vueshop.com.cn/index.php?http_referer=umyui" target="_blank">
                    <img src="http://uviewui.com/customer/sdf1516355we0sd2.jpg">
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
                        <span v-if="item.title !== '起步'" @click="openCom(item.show, index)" class="icon-us user-select">
                             {{ item.title }}
                             <span class="u-table-word-icon">
                                 <i :class="[item.show ? 'el-icon-arrow-up' : 'el-icon-arrow-down']"></i>
                             </span>
                        </span>
                        <span v-else>{{ item.title }}</span>
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
            <nuxt-child class="content" :class="{ 'customMdclass': mdStyle }"/>
        </div>
      <el-dialog
        title="成为赞助商"
        :visible.sync="dialogVisible"
        width="40%"
        :before-close="handleClose">
        <div>
          <p>如果您有品牌推广、活动推广、招聘推广、社区合作等需求，欢迎联系我们，成为赞助商。</p>
          <p>您的广告将出现在umy-ui文档所有子页面及 GitHub Readme 等页面。</p>
          <p>咨询QQ：403802162, 咨询邮箱:403802162@qq.com, 咨询微信号：travel196</p>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
</template>

<script>
    import tableMenuData from '../utils/table-menu-data'
    // 二级固定 /wel
    export default {
        name: "umycomponent",
        data () {
            return {
                dialogVisible: false,
                basics: '/umycomponent/',
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
               let str = this.$store.state.url
               if (str.charAt(str.length - 1) === '/') {
                 return str.substring(0, str.length - 1)
               } else {
                 return this.$store.state.url
               }
            },
            // 判断是否为自定义的md api页面，然后写不同的样式
            mdStyle () {
                const url = this.$store.state.url
                return url === '/umycomponent/u-table-column-api' ||
                    url === '/umycomponent/paginationAndSideslipFrame'
            },
        },
        mounted () {
            this.componentsData.forEach(row => {
                row.list.forEach(item => {
                    if (this.basics + item.url === this.activeUrl) {
                        row.show = true
                    }
                })
            })
        },
        methods: {
            openCom (fals, index) {
              this.componentsData[index].show = !fals
            },
            handleClose () {
               this.dialogVisible = false
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

<style lang="scss">
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
            /*background-color: #ebebeb;*/
            width: 190px;
            margin-top: 20px;
            height: 90px;
            line-height: 90px;
            border-radius: 5px;
            overflow: hidden;
            .el-button {
              color: $dh-color !important;
              border: 1px solid $dh-color !important;
            }
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
