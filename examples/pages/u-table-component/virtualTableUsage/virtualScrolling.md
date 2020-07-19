### 虚拟滚动(基础虚拟，不解决列多情况)

 建议开启使用：show-body-overflow 和 show-header-overflow 。

（注意：不给height或者不给maxheight，又或者给的是0，use-virtual直接会关闭）。 如果你数据多而且高度为0或者为空，那么就会卡死） 。

 (如果你需要数据多少表格就多高，自适应，那么就不要给高度，且虚拟滚动会关闭。这个不支持数据量太大的情况哦)

（注：启用纵向虚拟滚的后不支持动态行高，如果要支持动态行高，将虚拟滚动关闭即可）。

（如果想滚动表格到某个位置你可以调用pagingScrollTopLeft方法。参数可以看文档api哦）。

:::demo 当`u-table`元素中注入`data`对象数组后，添加use-virtual属性开启虚拟，同时设置row-height行高(它有默认值，请看文档)，同时必须给定height，或者max-height。
```html
  <template>
   <div>
     <p style="margin: 20px 0;">
          <el-button @click="setHei(400)">设置高度为400</el-button>
          <el-button @click="setHei(600)">设置高度为600</el-button>
          <el-button @click="setHei(800)">设置高度为800</el-button>
          <el-button @click="pagingScrollTopLeft(2000)">滚动到2千位置</el-button>
          <el-button @click="pagingScrollTopLeft(5000)">滚动到5千位置</el-button>
          <el-button @click="pagingScrollTopLeft(0)">滚动到顶部</el-button>
          <el-button @click="scrollBottom">滚动到底部位置</el-button>
     </p>
     <u-table
          ref="plTable"
          :data="tableData"
          :height="height"
          use-virtual
          showBodyOverflow="title"
          showHeaderOverflow="title"
          :row-height="rowHeight"
          border>
          <u-table-column type="index" width="100" fixed/>
          <u-table-column
             v-for="item in columns"
             :key="item.id"
             :resizable="item.resizable"
             :show-overflow-tooltip="item.showOverflow"
             :prop="item.prop"
             :label="item.label"
             :fixed="item.fixed"
             :width="item.width"/>
        </u-table>
    </div>
 </template>

  <script>
    export default {
      data() {
        return {
          height: 0,
          rowHeight: 50,
          columns: Array.from({ length: 20 }, (_, idx) => ({
              prop: 'address', id: idx, label: '地址地址地址地址地址地址地址地址地址地址地址' + idx, width: 200
          })),
         tableData: Array.from({ length: 500 }, (_, idx) => ({
                id: idx + 1,
                date: '2016-05-03',
                name: 1,
                ab: '欢迎使用u-table',
                address: '北京市天安门天安门天安门北京市天安门天安门天安门北京市天安门天安门天安门'
           }))
        }
      },
      mounted () {
        // 假如你在这里搞个setTimeout3秒去赋值高度，且表格数据很，那么你这个页面进来会非常卡，
        // 因为啊，你在data()里面声明高度为0，然后呢。去看看顶部说的那句话，如果高度为0虚拟滚动就会关闭。
        this.height = 500 // 动态设置高度
      },
      methods: {
        setHei (val) {
           this.height = val
        },
         scrollBottom () {
            this.$refs.plTable.scrollBottom()
         },
        pagingScrollTopLeft (val) {
            this.$refs.plTable.pagingScrollTopLeft(val, 0)
        },
      }
    }
  </script>
```
:::
