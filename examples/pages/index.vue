<template>
  <div class="homeIndex">
    <div class="desc width100">
      <h1>网站快速成型工具</h1>
      <h2 class="desc-text">为开发者准备的基于 Vue 2.0 的桌面端组件库; 流畅渲染表格万级数据</h2>
      <img src="../assets/banner.png" class="banner">
    </div>
    <div class="shiyong">
      <p class="card-title2">国内使用umy-ui的地区分布图</p>
      <p class="miaoshu">umy-ui完美解决表格数据多而导致卡问题，目前使用的人分布在全国各地及台湾。其中可以看出重要的IT城市，如北京，上海，深圳，广州，浙江，成都，武汉，南京等都有用户在使用！</p>
      <img src="../assets/umyuifenbu.png">
    </div>
    <div class="waa desc">
      <p class="card-title">四大利器，为您保驾护航</p>
      <ul class="row">
        <li class="col-md-3">
          <div class="card-item"><img src="https://uviewui.com/index/guide.png">
            <h3>文档</h3>
            <p>涵盖umy-ui各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川 </p>
          </div>
        </li>
        <li class="col-md-3">
          <div class="card-item"><img src="https://uviewui.com/index/components.png">
            <h3>组件</h3>
            <p>众多组件覆盖开发过程的各个需求，组件功能丰富，u-table组件解决表格万级数据渲染卡顿问题。</p>
          </div>
        </li>
        <li class="col-md-3">
          <div class="card-item"><img src="https://uviewui.com/index/js.png">
            <h3>工具库</h3>
            <p>众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</p>
          </div>
        </li>
        <li class="col-md-3">
          <div class="card-item"><img src="https://uviewui.com/index/layout.png">
            <h3>布局</h3>
            <p>收集众多的常用页面和布局，减少开发者的重复工作，让您专注逻辑，事半功倍</p>
          </div>
        </li>
      </ul>
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
    <div class="guanjianzi">
      <p class="card-title">您可搜索如下关键字，即可找到umy-ui</p>
      <h4>umyui</h4>
      <h4>umy-ui</h4>
      <h4>解决element表格卡顿</h4>
      <h4>解决大数据表格卡顿</h4>
      <h4>解决大量数据导致表格卡顿</h4>
      <h4>vue ui组件库</h4>
      <h4>vue,element列表大数据卡顿问题</h4>
      <h4>vue列表渲染慢</h4>
      <h4>element表格渲染慢</h4>
      <h4>表格渲染慢（卡）</h4>
      <h4>表格全选卡</h4>
      <h4>表格数据多了就卡顿</h4>
      <h4>element表格数据多了就卡顿</h4>
      <h4>vue表格数据多了就卡顿</h4>
      <h4>编辑表格卡顿问题</h4>
      <h4>表格存在输入框就会卡顿</h4>
      <h4>表格数据多了就卡死</h4>
      <h4>表格数据多了就渲染慢</h4>
      <h4>表格数据多了就卡顿</h4>
    </div>
    <p style="padding: 100px 0 30px 0;text-align: center;color: #606266;font-size: 14px">Copyright 2020 UmyUi | 蜀ICP备2020025971号</p>
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
            img: require('../assets/from-gen-all.jpg')
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .homeIndex {padding-top: 50px;max-width: 1200px;margin: 0 auto;
    .shiyong {width: 100%;text-align: center;
      .card-title2 {
        color: #303133;
        font-size: 24px;
        padding: 50px 0 20px 0;
      }
      .miaoshu {
        margin: 0 auto;
        font-size: 14px;
        color: #5e6d82;
        line-height: 2em;
        width: 80%;
        margin-bottom: 30px;
      }
      img {width: 750px;}
    }
    .guanjianzi {
      text-align: center;
      padding: 50px 0;
      h4 {
        display: inline-block !important;
        margin-right: 30px;
        color: #606266;
        font-weight: inherit;
      }
    }
    .waa {
      overflow: hidden;
    }
    .row {
      margin-right: -15px;
      margin-left: -15px;
      overflow: hidden;
      .col-md-3 {
        width: 25%;
        float: left;
        padding: 0 20px;
        box-sizing: border-box;
        .card-item {
          height: 390px;
          border: 1px solid #eaeefb;
          border-radius: 5px;
          -webkit-transition: bottom .4s;
          transition: bottom .4s;
          position: relative;
          bottom: 0;
          img {
            width: 160px;
            margin: 40px auto 20px;
          }
          h3 {
            color: #606266;
            font-size: 18px;
            font-weight: 400;
            line-height: 45px;
          }
          p {
            font-size: 14px;
            color: #909399;
            padding: 0 25px;
            margin-bottom: 40px;
          }
        }
      }
    }
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
      padding: 50px 0;
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
