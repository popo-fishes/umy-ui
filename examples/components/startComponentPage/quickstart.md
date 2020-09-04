# 快速上手

### 完整引入
在 main.js 中写入以下内容：

```javascript
  import Vue from 'vue';
  import UmyUi from 'umy-ui'
  import 'umy-ui/lib/theme-chalk/index.css';// 引入样式
  import App from './App.vue';

  Vue.use(UmyUi);

  new Vue({
    el: '#app',
    render: h => h(App)
  });
```
### 按需引入
借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```javascript
npm install babel-plugin-component -D
```

然后，将 .babelrc 中plugins添加：

```javascript
{
  "plugins": [
    [
      "component",
      {
        "libraryName": "umy-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如 UTable, UTableColumn，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { UTable, UTableColumn } from 'umy-ui';
import App from './App.vue';

Vue.component(UTable.name, UTable);
Vue.component(UTableColumn.name, UTableColumn);
/* 或写为
 * Vue.use(UTable)
 * Vue.use(UTableColumn)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

完整组件列表和引入方式

```javascript
import Vue from 'vue';
import {
  UTableColumn,
  UTable,
  UxGrid,
  UxTableColumn
} from 'umy-ui';

Vue.use(UTableColumn);
Vue.use(UTable);
Vue.use(UxGrid);
Vue.use(UxTableColumn);
```
