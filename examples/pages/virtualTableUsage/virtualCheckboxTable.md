### 虚拟滚动多选框(基础虚拟，不解决列多情况)

 建议开启使用：show-body-overflow 和 show-header-overflow 。

 如果数据量大 且 表格存在 selection 复选框，那么全选时候 或者取消全选时候呢，就会卡。所以建议你开启big-data-checkbox属性 。

:::demo `data`对象数组后，大量数据不建议使用双向绑定的 data 属性（vue 监听会大数据会短暂的卡顿），建议使用 reloadData 函数,请看表格方法
```html
  <template>
   <div>
     <p style="margin: 20px 0;">
        <el-button @click="allSelection">全选</el-button>
        <el-checkbox style="margin-left:30px" v-model="checked">解决全选||取消全选卡顿？？</el-checkbox>
     </p>
     <u-table
          ref="plTable"
          :height="height"
          use-virtual
          :big-data-checkbox="checked"
          showBodyOverflow="title"
          showHeaderOverflow="title"
          :row-height="rowHeight"
          border>
          <u-table-column type="selection" width="55" :selectable="selectable"/>
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
         <div style="margin-top: 20px">
             <el-button @click="toggleSelection([datas[0], datas[2]])">切换第一、第三行的选中状态</el-button>
             <el-button @click="toggleSelection([datas[3]], '固定选中')">选中第四行</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
         </div>
    </div>
 </template>

  <script>
    export default {
      data() {
        return {
          checked: true,
          height: 400,
          rowHeight: 50,
          columns: Array.from({ length: 10 }, (_, idx) => ({
              prop: 'address', id: idx, label: '地址' + idx, width: 200
          }))
        }
      },
      mounted () {
          const data = Array.from({ length: 8000 }, (_, idx) => ({
               id: idx + 1,
               date: '2016-05-03',
               name: 1,
               ab: '欢迎使用u-table',
               address: '北京市天安门'
          }))
        this.datas = data
        // 设置表格数据
        this.$refs.plTable.reloadData(data)
      },
      methods: {
          selectable (row, index) {
              if (index === 1) {
                  return false
              } else {
                  return true
              }
          },
         allSelection () {
             this.$refs.plTable.toggleAllSelection()
         },
         clearSelection () {
             this.$refs.plTable.clearSelection()
         },
         toggleSelection(rows, type) {
             if (rows) {
               rows.forEach(row => {
                 // 注意： 勾选方法与element不同哦
                 // this.$refs.plTable.toggleRowSelection(row); // element表格是这样写的
                 // 我们得这样写

                 // 如果是固定选中
                 if (type === '固定选中') {
                 // toggleRowSelection方法参数不懂得去看文档api哦
                   this.$refs.plTable.toggleRowSelection([
                      {
                        row: row,
                        selected: true
                      }
                   ])
                  // 下面这是切换选中
                 } else {
                   this.$refs.plTable.toggleRowSelection([
                      {
                        row: row
                      }
                   ])
                 }
               });
             } else {
               this.$refs.plTable.clearSelection();
             }
           },
      }
    }
  </script>
```
:::
