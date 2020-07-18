### 列和行同时虚拟(解决多行列多情况)

大数据不建议使用双向绑定的 data 属性（vue 监听会大数据会短暂的卡顿），建议使用reloadData函数 。

:::demo 多行多列，你可以使用ux-grid哦  注：如果要启用横向虚拟滚动，不支持分组表头 。
```html
  <template>
   <div>
     <p style="margin: 20px 0;">
          <el-button @click="setHei(400)">设置高度为400</el-button>
          <el-button @click="setHei(600)">设置高度为600</el-button>
          <el-button @click="setHei(800)">设置高度为800</el-button>
          <el-button @click="pagingScrollTopLeft(5000)">滚动y和x到5千位置</el-button>
          <el-button @click="pagingScrollTopLeft(10000)">滚动y和x到1万位置</el-button>
          <el-button @click="pagingScrollTopLeft(0)">滚动y到顶部,x到左侧</el-button>
          <el-button @click="scrollBottom">滚动到底部位置</el-button>
     </p>
     <ux-grid
             ref="plxTable"
             :height="height"
             :checkboxConfig="{checkMethod: selectable, highlight: true}"
             @selection-change="selectionChange"
             @table-body-scroll="scroll"
             show-header-overflow="ellipsis">
         <ux-table-column type="checkbox" width="80"/>
         <ux-table-column type="index" width="100"/>
         <ux-table-column
                 v-for="item in columns"
                 :key="item.id"
                 :resizable="item.resizable"
                 :field="item.prop"
                 :title="item.label"
                 :sortable="item.sortable"
                 :width="item.width"
                 :fixed="item.fixed"/>
         <ux-table-column title="额外信息" width="60" field="address"></ux-table-column>
     </ux-grid>
     <div style="margin-top: 20px">
         <el-button @click="toggleSelection([datas[0], datas[2]])">切换第一、第三行的选中状态</el-button>
         <el-button @click="toggleSelection([datas[3]], '固定选中')">选中第四行</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
      <p style="margin: 20px 0;">
            <el-button @click="setData(3)">变化数据为3条</el-button>
            <el-button @click="setData(2000)">变化数据为2000条</el-button>
            <el-button @click="setData(5000)">变化数据为5000条</el-button>
            <el-radio-group v-model="radio" style="margin-left:30px">
               <el-radio :label="1">数据变化滚动到顶部</el-radio>
               <el-radio :label="2">数据变化滚动不滚动到顶部</el-radio>
             </el-radio-group>
       </p>
      </div>
   </div>
 </template>

  <script>
    export default {
      data() {
        return {
          height: 0,
          columns: [],
          scrollTop: 0,
          radio: 1
        }
      },
      mounted () {
          this.height = 500 // 动态设置高度
          // 异步设置数据，这样解决初次进来不卡，由于加载数据很大啦，你没必要这样做哦
           setTimeout(() => {
              let col = ['name', 'sex', 'describe']
              this.columns = Array.from({ length: 500 }, (_, idx) => ({
                      prop: idx > 2 ? col[2] : col[idx],
                      id: idx,
                      label: idx > 2 ? col[2] : col[idx],
                      width: 200,
                      sortable: idx === 1,
                      resizable: true
              }))
              const data = Array.from({ length: 5000 }, (_, idx) => ({
                   id: idx + 1,
                   name: 'pl' + idx,
                   sex: idx,
                   describe: '欢迎使用plx' + idx
              }))
              this.datas = data // 知道为啥datas不在 data()方法里面定义吗？嘻嘻
              this.$refs.plxTable.reloadData(this.datas)
           })
      },
      methods: {
       setHei (val) {
         this.height = val
       },
       scroll ({scrollTop, scrollLeft}) {
         this.scrollTop = scrollTop
       },
       setData (num) {
          this.datas = Array.from({ length: num }, (_, idx) => ({
               id: idx + 1,
               name: 'pl' + idx,
               sex: idx,
               describe: '欢迎使用plx' + idx
          }))
          this.$refs.plxTable.reloadData(this.datas)
          // 滚动到顶部
          if (this.radio === 2) {
              this.$refs.plxTable.pagingScrollTopLeft(this.scrollTop)
          }
       },
        selectable ({row}) {
            return row.id !== 2
        },
         toggleSelection(rows, type) {
          if (rows) {
            rows.forEach(row => {
              // 注意： 勾选方法与element不同哦
              // this.$refs.plxTable.toggleRowSelection(row); // element表格是这样写的
              // 我们得这样写

              // 如果是固定选中
              if (type === '固定选中') {
              // toggleRowSelection方法参数不懂得去看文档api哦
                this.$refs.plxTable.toggleRowSelection([
                   {
                     row: row,
                     selected: true
                   }
                ])
               // 下面这是切换选中
              } else {
                this.$refs.plxTable.toggleRowSelection([
                   {
                     row: row
                   }
                ])
              }
            });
          } else {
            this.$refs.plxTable.clearSelection();
          }
        },
        pagingScrollTopLeft (val) {
           this.$refs.plxTable.pagingScrollTopLeft(val, val)
        },
        scrollBottom () {
           this.$refs.plxTable.scrollToRow(this.datas[this.datas.length - 1])
        },
        // 选中的行
        selectionChange (row) {
          console.log(row)
         }
      }
    }
  </script>
```
:::
