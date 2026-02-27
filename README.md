### umy-ui 一套为开发者准备的基于 Vue 2.0 的桌面端组件库，完美解决表格万级数据渲染卡顿，编辑表格卡顿问题

> 回答下那些看见 umy-ui 的反应哈， 首先不要去看 UI 两字 ，我们是想后续做更多组件。所以搞成了 UI 库。你完全可以按需引入库里面的表格组件，然后使用其他 UI 库的组件，都不会冲突。所以不要觉得是你在安装一个 UI 库，让你去使用一个 UI 库，并非如此！如果你只是想解决表格卡顿，你只需要关注 umy-ui 里面的表格组件！

> umy-ui 叫（U 米-ui）

> (更多问题请加入 umy-ui 交流群吧), 不需要您的捐赠， 只需要点击上方的 Star！！！

> QQ交流群: 1087351634（新群）之前的群都被封了

[umy-ui 官网](http://43.136.119.145/)

[umy-ui 文档](http://43.136.119.145/)

## 安装

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用

```shell
 npm install umy-ui
```

### CDN 方式

```html
<!--引入表格样式-->
<link
  rel="stylesheet"
  href="https://unpkg.com/umy-ui/lib/theme-chalk/index.css"
/>

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
