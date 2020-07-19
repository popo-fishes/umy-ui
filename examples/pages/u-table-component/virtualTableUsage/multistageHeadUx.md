### 多级头

大数据不建议使用双向绑定的 data 属性（vue 监听会大数据会短暂的卡顿），建议使用reloadData函数 。

:::demo 使用多级头，X轴虚拟滚动自动关闭 。
```html
  <template>
   <div>
     <ux-grid
             ref="plxTable"
             :max-height="height"
             show-overflow
             show-summary
             :summary-method="summaryMethod"
             show-header-overflow="ellipsis">
        <ux-table-column title="基本信息">
            <ux-table-column type="index" width="60"></ux-table-column>
            <ux-table-column field="name" title="Name"></ux-table-column>
          </ux-table-column>
          <ux-table-column title="更多信息">
            <ux-table-column field="role" title="Role" width="100"></ux-table-column>
            <ux-table-column title="详细信息">
              <ux-table-column field="sex" title="Sex" width="100"></ux-table-column>
              <ux-table-column field="age" title="Age" width="100"></ux-table-column>
            </ux-table-column>
          </ux-table-column>
          <ux-table-column title="分类信息">
            <ux-table-column field="date3" title="Date" width="100"></ux-table-column>
          </ux-table-column>
          <ux-table-column field="address" title="Address" width="100" show-overflow></ux-table-column>
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
   </div>
 </template>

  <script>
    export default {
      data() {
        return {
          height: 0,
          columns: []
        }
      },
      mounted () {
          this.height = 500 // 动态设置高度
          // 异步设置数据，这样解决初次进来不卡，由于加载数据很大啦，你没必要这样做哦
           setTimeout(() => {
              let col = ['name', 'sex', 'describe']
              this.columns = Array.from({ length: 50 }, (_, idx) => ({
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
       summaryMethod ({ columns, data }) {
          const means = [] // 合计
          columns.forEach((column, columnIndex) => {
              if (columnIndex === 0) {
                  means.push('合计')
              } else {
                  const values = data.map(item => Number(item[column.property]));
                  // 合计
                  if (!values.every(value => isNaN(value))) {
                      means[columnIndex] = values.reduce((prev, curr) => {
                          const value = Number(curr);
                          if (!isNaN(value)) {
                              return prev + curr;
                          } else {
                              return prev;
                          }
                      }, 0);
                      means[columnIndex] += ' 元'
                  } else {
                      means[columnIndex] = '';
                  }
              }
          })
          // 返回一个二维数组的表尾合计(不要平均值，你就不要在数组中添加)
          return [means]
        },
      }
    }
  </script>
```
:::
