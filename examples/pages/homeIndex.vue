<template>
  <div class="homeIndex">
    <div class="desc width100">
      <h1>网站快速成型工具</h1>
      <h2 class="desc-text">为开发者的基于 Vue 2.0 的桌面端组件库; 流畅渲染表格万级数据</h2>
      <img src="../assets/banner.png" class="banner">
    </div>
    <div class="width100 desc">
       <p class="card-title">友情链接</p>
       <div class="row overflowHidden">
          <div class="link__wrap fl" v-for="(item, index) in LinksData" :key="index">
             <a :href="item.url" target="_blank">
              <img v-if="item.img" :src="item.img">
              <div class="texts" v-if="item.title">{{ item.title }}</div>
             </a>
          </div>
       </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "homeIndex",
        data () {
            return {
                LinksData: [
                    {
                        url: 'http://beautiful.panm.cn/vue-admin-beautiful/#/index',
                        img: require('../assets/vue-admin-beautiful.png')
                    },
                    {
                        url: 'https://uviewui.com/',
                        img: require('../assets/uview2.png')
                    },
                    {
                        url: 'https://github.com/JakHuang/form-generator',
                        title: 'Element UI 表单设计及代码生成器（可视化表单设计器，一键生成 element 表单）'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
 .homeIndex {padding-top: 50px;max-width: 1200px;margin: 0 auto;
    .desc {text-align: center;
       h1 {font-weight: 700;color: #303133;}
      .desc-text {
        color: #606266;
        font-size: 16px;
        border: none;
        line-height: 50px;
        font-weight: 400;
      }
      .banner {width: 100%;}
    }
    .card-title {
      color: #303133;
      font-size: 24px;
      margin-bottom: 30px;
    }
    .row {
      margin-right: -15px;
      margin-left: -15px;
      .link__wrap {
         width: 33.33%;
         padding-right: 15px;
         padding-left: 15px;
         margin-bottom: 10px;
        a {
         border-radius: 5px;
         overflow: hidden;
         display: inline-block;
       }
        img {
           width: 100%;
           display: block;
        }
       .texts {
         display: flex;
         align-items: center;
         justify-content: center;
         color: #000c17;
         &:hover{
          color: $dh-color;
         }
        }
      }
    }
 }
</style>
