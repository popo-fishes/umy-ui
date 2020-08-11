### 带分页的表格

>  使用了分页，在动态设置高度时请注意, 下面的这个解释很多，如果对你无用。你可以跳过这个图，看下面的实例部分
``` javascript
// 你加了分页 我里面会延迟去设置高度，因为我要计算分页的高度，此时分页还没出来 我得mounted后去计算，所以你在mounted去计算高度 是有问题的     你可以不使用分页组件（隐藏掉）就没问题了
// ，使用分页组件  请 settimeout下再去设置高度
  mounted () {
        // 不使用分页  下面的这个计算是（假装给个示例）。请结合自己情况去计算，
        // 比如我一个页面有头部，表单高级搜索等盒子，那么我这里就这样计算 : 表格高度 =  浏览器的窗口高度 - 我的头部盒子高度 - 表单高级搜索高度
        // this.height = 浏览器的窗口高度  - (this.$refs.goodsIndex.offsetHeight - this.$refs.OrderSearch.offsetHeight)
        this.height = window.innerHeight - 50
        // 使用分页你得这样去计算高度。加个延迟
        setTimeout(() => {
            // 比如我一个页面有头部，表单高级搜索等盒子，那么我这里就这样计算 : 表格高度 =  浏览器的窗口高度 - 我的头部盒子高度 - 表单高级搜索高度
           // this.height = 浏览器的窗口高度  - (this.$refs.goodsIndex.offsetHeight - this.$refs.OrderSearch.offsetHeight)
           this.height = window.innerHeight - 50
        })，


        // 有了这个是是不是可以实现拖动浏览器宽度去，更新表格高度啦？做响应式  如
        // 监听窗口变化， 这个代码写app.vue入口里面
          window.onresize = () => {
            obj = {
              h: window.innerHeight,
              w: window.innerWidth
            }
            // SETscreen就是vuex中的Mutation中的方法
            this.SETscreen(obj) // 然后把这个存到vuex中。如果页面中有表格就去监听这个变化
          }
    },
      // 监听窗户高度变化，假如这个是我某个页面使用了表格
       watch: {
         // 获取vuex中的screenObj对象，进行监听
         screenObj (val) {
            // 下面的这个计算是（假装给个示例）
            // 比如我一个页面有头部，表单高级搜索等盒子，那么我这里就这样计算 : 表格高度 =  浏览器的窗口高度 - 我的头部盒子高度 - 表单高级搜索高度
            // this.height = 浏览器的窗口高度  - (this.$refs.goodsIndex.offsetHeight - this.$refs.OrderSearch.offsetHeight)
            this.height = window.innerHeight - 50
         }
       }
```

:::demo 当`u-table`元素中注入`data`对象数组后，给定一个pagination-show为true就可以显示分页啦，分页的属性呢跟element的分页一样，直接把属性配置在u-table就好啦。更多分页属性请看文档api吧。
```html
  <template>
    <u-table
      :data="tableData"
      :pagination-show="true"
      :total="pageForm.total"
      :page-size="pageForm.pageSize"
      :current-page="pageForm.currentPage"
      @handlePageSize="handlePageSize"
      :max-height="height">
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
      </u-table-column>
    </u-table>
  </template>

  <script>
    export default {
      data() {
        return {
         height: 300,
         pageForm: {
              total: 1000,
              pageSize: 10,
              currentPage: 1
          },
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
          }, {
           sex: '未知',
           name: '王小狗',
           age: '15'
         }, {
             sex: '未知',
             name: '王小狗',
             age: '15'
           }, {
             sex: '未知',
             name: '王小狗',
             age: '15'
           }, {
             sex: '未知',
             name: '王小狗',
             age: '15'
           }]
        }
      },
      methods: {
        // 分页事件
        handlePageSize ({page, size}) {
            console.log(page, size)
        }
      }
    }
  </script>
```
