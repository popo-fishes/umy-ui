### umy-ui 一套为开发者准备的基于 Vue 2.0 的桌面端组件库，完美解决表格万级数据渲染卡顿，编辑表格卡顿问题

> umy-ui叫（U米-ui）或者叫悠米-ui

> umy-ui集成了pl-table，也就说您使用了这个库呢，您就可以解决表格数据多，导致的一切问题！

> 如果说您之前使用的pl-table,现在转umy-ui其实也很简单，您只需要安装umy-ui, 然后把pl-table组件改成u-table组件。具体请看文档吧！

> (更多问题请加入umy-ui交流群吧), 不需要您的捐赠， 只需要点击上方的Star！！！

> QQ交流1群: 675286117已满员

> QQ交流2群: 939125115新群未满员

> 文档，官网可能进入慢，点击页面卡是正常的，因为我们把官网放在github上，加载比较慢。后续买个服务器部署下就好了哈！！

[umy-ui官网](https://u-leo.github.io/umy-ui/docs/index.html)

[umy-ui文档](https://u-leo.github.io/umy-ui/docs/index.html)



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

  <!-- 这样去引如会直接下最新版本，如果你的项目打包发布了，然后遇见pl-table大更新 你可能项目会报错。-->

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
