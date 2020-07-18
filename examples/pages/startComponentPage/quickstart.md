# 快速上手

在 main.js 中写入以下内容：

```javascript
  import UmyUi from 'umy-ui'

  import 'umy-ui/lib/theme-chalk/index.css';// 引入样式

  Vue.use(UmyUi);

  new Vue({
    el: '#app',
    render: h => h(App)
  });
```
