### umy-ui 一套为开发者准备的基于 Vue 2.0 的桌面端组件库，完美解决表格万级数据渲染卡顿，编辑表格卡顿问题

> 回答下那些看见umy-ui的反应哈， 首先不要去看UI 两字 ，我们是想后续做更多组件。所以搞成了UI库。你完全可以按需引入库里面的表格组件，然后使用其他UI库的组件，都不会冲突。所以不要觉得是你在安装一个UI库，让你去使用一个UI库，并非如此！如果你只是想解决表格卡顿，你只需要关注umy-ui里面的表格组件！

> umy-ui叫（U米-ui）

> (更多问题请加入umy-ui交流群吧), 不需要您的捐赠， 只需要点击上方的Star！！！

> QQ交流1群: 675286117已满员

> QQ交流2群: 939125115新群未满员

[umy-ui官网](http://www.umyui.com)

[umy-ui文档](http://www.umyui.com)



## 安装

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用

```shell
 npm install umy-ui
```

### CDN 方式

```html
  <!--引入表格样式-->
  <link rel="stylesheet" href="https://unpkg.com/umy-ui/lib/theme-chalk/index.css">

  <!-- import Vue -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>

  <script src="https://unpkg.com/umy-ui/lib/index.js"></script>
  <!-- 真实项目不建议你直接引入  <script src="https://unpkg.com/umy-ui/lib/index.js"></script>-->

  <!-- 这样去引如会直接下最新版本，如果你的项目打包发布了，然后遇见umy-ui大更新 你可能项目会报错。-->

  <!--推荐你这样引入： https://unpkg.com/umy-ui$1.0.1/lib/index.js   加入版本号！-->
  <!-- 这样去引如会直接下最新版本，如果你的项目打包发布了，然后遇见umy-ui大更新 你可能项目会报错。-->

  <!--推荐你这样引入： https://unpkg.com/umy-ui@1.0.1/lib/index.js   加入版本号！-->
```


## 示例

```shell
 <template>
    <u-table
      :data="tableData"
      :border="false"
      style="width: 100%">
      <template slot="empty">
            没有查询到符合条件的记录
       </template>
      <u-table-column
        prop="name"
        label="名字"
        width="180">
      </u-table-column>
      <u-table-column
        prop="sex"
        label="性别"
        width="180">
      </u-table-column>
      <u-table-column
        prop="age"
        label="年龄">
        <template v-slot="scope">
            <el-select v-model="scope.row.sex">
                             <el-option v-for="item in sexList" :key="item.value" :label="item.label" :value="item.value"></el-option>
                           </el-select>
        </template>
      </u-table-column>
    </u-table>
  </template>

  <script>
    export default {
      data() {
        return {
          sexList: [
             { value: 1,label: '男' },
             { value: 2,label: '女'},
             { value: 3,label: '未知'}
          ],
          tableData: [{
            sex: '男',
            name: '王小虎',
            age: '15'
          }, {
            sex: '女',
            name: '王小明',
            age: '15'
          }, {
            sex: '女',
            name: '王小丽',
            age: '15'
          }, {
            sex: '未知',
            name: '王小狗',
            age: '15'
          }]
        }
      }
    }
  </script>
```



## 友情链接

#### - [uView 文档（超棒的移动跨端框架，文档详细，上手容易）](https://uviewui.com/)

#### - [uView 开源地址（uView UI，是 uni-app 生态优秀的 UI 框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水）](https://github.com/YanxinNet/uView)

#### **vue-admin-beautiful** —— [企业级、通用型中后台前端解决方案（基于vue/cli 4 最新版，同时支持电脑，手机，平板）](https://github.com/chuzhixin/vue-admin-beautiful)

#### **vue-admin-beautiful** —— [在线演示](http://beautiful.panm.cn/vue-admin-beautiful/#/index)

#### - [✨Element UI 表单设计及代码生成器（可视化表单设计器，一键生成 element 表单）](https://github.com/JakHuang/form-generator)
