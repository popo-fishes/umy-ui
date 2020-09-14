# 安装

> 看见umy-ui的反应 ?  首先不要去看UI 两字 ，我们是想后续做更多组件。所以搞成了UI库。你完全可以按需引入库里面的表格组件，然后使用其他UI库的组件，都不会冲突。所以不要觉得是你在安装一个UI库，让你去使用一个UI库，并非如此！如果你只是想解决表格卡顿，你只需要关注umy-ui里面的表格组件

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用

```shell
 npm install umy-ui
```

### CDN 方式

目前可以通过 [https://unpkg.com/umy-ui/lib/index.js) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

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

:::tip
我们建议使用 CDN 引入 umy-ui 的用户在链接地址上锁定版本，以免将来 umy-ui 升级时受到非兼容性更新的影响。锁定版本的方法请查看 [unpkg.com](https://unpkg.com)。
:::

