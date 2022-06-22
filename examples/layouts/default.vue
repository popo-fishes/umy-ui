<template>
  <div class="layoutIndexBox card-box" ref="cardBox">
    <div class="navbar width100">
      <div class="title-pl" @click="linkNav('/')">umy-ui</div>
<!--      <aplayer-mc v-model="checked"/>-->
      <div class="nav-pl">
        <div class="moshi" v-if="releaseShow()" style="color: red">umy-ui发布新版本啦！！！</div>
<!--        <div class="moshi"><el-checkbox v-model="checked">设置播放器模式: mini</el-checkbox></div>-->
        <div class="search-box">
          <el-input
            placeholder="搜索文档关键字"
            v-model="docKeyWord"
            clearable>
          </el-input>
        </div>
        <div class="linkList">
          <div class="nav-item user-select"
               v-for="(item, index) in navData"
               :class="{ active: activeUrl === item.url || (componentActive && item.name === '组件') }"
               :key="index"
               @click="linkNav(item.url)">
            <el-popover v-if="item.name === '交流'" placement="top-start" width="200" trigger="hover">
              <div class="jiaoliu">
                <p>QQ交流1群: 675286117已满员</p>
                <p>QQ交流2群: 939125115新群未满员(可能封群了)</p>
                <br/>
                <p>QQ交流3群: 127993351</p>
              </div>
              <span slot="reference">{{ item.name }}</span>
            </el-popover>
            <span v-else>{{ item.name }}</span>
          </div>
          <!--版本-->
          <div class="nav-item">
            <el-dropdown trigger="hover">
              <span class="el-dropdown-link">
                {{ versionData[0] }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item, index) in versionData" :key="index">{{ item }}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="nav-item">
            <a href="https://github.com/u-leo/umy-ui" target="_blank">GitHub</a>
          </div>
        </div>
      </div>
    </div>
    <div class="mainBox"><nuxt /></div>
  </div>
</template>
<script>
  import moment from 'moment'
  import versionData from '../utils/version'
  // import aplayerMc from '../components/aplayer-mc'
  // 一级固定
  export default {
    data () {
      return {
        docKeyWord: '',
        navData: [
          {
            name: '首页',
            url: '/'
          },
          {
            name: '组件',
            url: '/umycomponent/installation'
          },
          {
            name: '交流',
            url: ''
          }
        ],
        versionData: versionData,
        checked: true,
        timeText: '2020-11-10' // 文档最新发布日期
      }
    },
    computed:{
      activeUrl () {
        return this.$store.state.url
      },
      componentActive () {
        return this.$store.state.componentActive
      }
    },
    mounted () {
      this.releaseShow()
    },
    methods: {
      linkNav (val) {
        if (val) {
          this.$router.push({
            path: val
          })
        }
      },
      releaseShow () {
        let threeDaysLater = moment(this.timeText).add(3, 'days').format('YYYY-MM-DD')
        let currentTime = moment().format('YYYY-MM-DD')
        let timeStamp1 =  moment(threeDaysLater).valueOf()
        let timeStamp2 =  moment(currentTime).valueOf()
        // 如果当前时间小于，文档发布时间加上3天的时间，就不显示那个最新版不版本提示
        console.log(timeStamp2 < timeStamp1)
        return timeStamp2 < timeStamp1
      }
    },
    watch: {
      // 切换页面自动滚动顶部
      activeUrl: function (val) {
        if (this.$refs.cardBox) {
          this.$refs.cardBox.scrollTop = 0
        }
      }
    }
  }
</script>

<style lang="scss">
  .jiaoliu {
    font-size: 14px;
  }
  .moshi {
    color: #555;
    font-size: 14px;
    margin-right: 20px;
  }
  .layoutIndexBox {
    .plAudio {visibility: hidden;width: 0;height: 0;}
    .navbar {
      z-index: 1000;
      color: #2c3e50;
      position: fixed;
      background-color: white;
      top: 0;
      left: 0;
      display: flex;
      width: calc(100% - 9px);
      min-width: 1200px;
      padding: 10px 30px;
      border-bottom: 1px solid #eaecef;
      .nav-pl {
        flex: 1;
        justify-content: flex-end;
        display: flex;
        align-items: center;
        .search-box {
          margin-right: 20px;
        }
        .linkList {
          .active {
            color: $dh-color;
            border-bottom: 2px solid $dh-color;
          }
          .nav-item {
            display: inline-block;
            margin-left: 1.5rem;
            font-size: 14px;
            cursor: pointer;
            &:hover{
              color: $dh-color;
            }
            a {
              color: #2c3e50;
              &:hover{
                color: $dh-color;
              }
            }
          }
        }
      }
      .title-pl {
        font-weight: 600;
        cursor: pointer;
        font-size: 24px;
      }
    }
    .mainBox {
      padding: 56px 30px 0 30px;
      position: relative;
      width: 100%;
    }
  }
</style>
