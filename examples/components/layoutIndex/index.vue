<template>
  <div class="layoutIndexBox card-box" ref="cardBox">
    <div class="navbar width100">
       <div class="title-pl" @click="linkNav('/')">umy-ui</div>
       <div id="aplayer" class="aplayer"></div>
       <div class="nav-pl">
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
                       <p>QQ交流2群: 939125115新群未满员</p>
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
    <div class="mainBox"><router-view/></div>
  </div>
</template>
<script>
  import APlayer from 'APlayer'
  import Drag from '../../utils/Drag'
  import versionData from '../../utils/version'
    // 一级固定
  export default{
      data () {
          return {
              docKeyWord: '',
              navData: [
                  {
                      name: '首页',
                      url: '/wel/index'
                  },
                  {
                      name: '组件',
                      url: '/wel/component/installation'
                  },
                  {
                      name: '交流',
                      url: ''
                  }
              ],
              versionData: versionData,
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
          Drag()
          const ap = new APlayer({
              container: document.getElementById('aplayer'),
              autoplay: true,
              lrcType: 3,
              listMaxHeight: '150px',
              // 开发模式下不显示歌词，是正常的
              audio: [
                  {
                      name: '芒种',
                      artist: '赵方婧',
                      url: 'https://35dinghuo.oss-cn-hangzhou.aliyuncs.com/static/mangzhong.mp3',
                      cover: 'http://129.211.13.167/music/mz.jpg',
                      lrc: 'http://129.211.13.167/music/mangzhong.lrc',
                  },
                  {
                      name: '晴天',
                      artist: '周杰伦',
                      url: 'http://129.211.13.167/music/qingtian.mp3',
                      lrc: 'http://129.211.13.167/music/qingtian.lrc',
                      cover: 'http://129.211.13.167/music/zjl.png'
                  },
                  {
                      name: '鼓楼',
                      artist: '赵雷',
                      url: 'http://129.211.13.167/music/gulou.mp3',
                      lrc: 'http://129.211.13.167/music/gulou.lrc',
                      cover: 'http://129.211.13.167/music/zhaolei.png'
                  },
                  {
                      name: 'Shots',
                      artist: 'imagine dragons',
                      url: 'http://129.211.13.167/music/Shots.mp3',
                      lrc: 'http://129.211.13.167/music/Shots.lrc',
                      cover: 'http://129.211.13.167/music/shots.png'
                  },
                  {
                      name: '有何不可',
                      artist: '许嵩',
                      url: 'http://129.211.13.167/music/youhebuke.mp3',
                      lrc: 'http://129.211.13.167/music/youhebuke.lrc',
                      cover: 'http://129.211.13.167/music/xusong.png'
                  },
                  {
                      name: '浪人琵琶',
                      artist: '胡66',
                      url: 'http://129.211.13.167/music/langrenpipa.mp3',
                      lrc: 'http://129.211.13.167/music/langrenpipa.lrc',
                      cover: 'http://129.211.13.167/music/hu66.png'
                  },
                  {
                      name: '最爱',
                      artist: '周慧敏',
                      url: 'http://129.211.13.167/music/zuiai.mp3',
                      lrc: 'http://129.211.13.167/music/zuiai.lrc',
                      cover: 'http://129.211.13.167/music/zhouhuimin.png'
                  },
                  {
                      name: '野孩子',
                      artist: '杨千嬅',
                      url: 'http://129.211.13.167/music/yehaizi.mp3',
                      lrc: 'http://129.211.13.167/music/yehaizi.lrc',
                      cover: 'http://129.211.13.167/music/yangqianhua.png'
                  },
                  {
                      name: '淋雨一直走',
                      artist: '张韶涵',
                      url: 'http://129.211.13.167/music/lyyzz.mp3',
                      lrc: 'http://129.211.13.167/music/lyyzz.lrc',
                      cover: 'http://129.211.13.167/music/zhangshaohan.png'
                  },
                  {
                      name: 'Run Free',
                      artist: 'Deep Chills _ IVIE',
                      url: 'http://129.211.13.167/music/runFree.mp3',
                      lrc: 'http://129.211.13.167/music/runFree.lrc',
                      cover: 'http://129.211.13.167/music/runFree.png'
                  }
              ]
          });
      },
      methods: {
          linkNav (val) {
             if (val) {
                 this.$router.push({
                     path: val
                 })
             }
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
    .aplayer .aplayer-lrc p.aplayer-lrc-current {
        color: $dh-color !important;
    }
    .aplayer {
        position: fixed;
        left: 250px;
        min-width: 500px;
        max-width: 600px;
        top: 10px;
        z-index: 10000;
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
