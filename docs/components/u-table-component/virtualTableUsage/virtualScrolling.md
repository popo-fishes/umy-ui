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
         <u-table-column
               fixed="right"
               label="操作"
               width="150">
               <template slot-scope="scope">
                 <el-button type="text" size="small">查看</el-button>
                 <el-button type="text" size="small">编辑</el-button>
               </template>
             </u-table-column>
        </u-table>
    </div>
 </template>

  <script>
    export default {
      data() {
        return {
          height: 0,
          rowHeight: 55, // 如果你这里给行高为50，那么你表格行会出现错乱，不要问为啥，因为你可以看看控制台看节点的高是多少，是55，而你这里给50就有问题！
          columns: Array.from({ length: 8 }, (_, idx) => ({
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
