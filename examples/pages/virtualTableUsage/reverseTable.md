### 反转列和行

大数据不建议使用双向绑定的 data 属性（vue 监听会大数据会短暂的卡顿），建议使用reloadData函数 。

:::demo
```html
  <template>
   <div>
     <ux-grid
             ref="plxTable"
             class="reverse-table"
             :show-header="false"
             :max-height="485"
             show-header-overflow="ellipsis">
     </ux-grid>
   </div>
 </template>

  <script>
    export default {
      data() {
        return {
           newColumns: [
             { field: 'name', title: '名字' },
             { field: 'sex', title: '性别' },
             { field: 'age', title: '年龄' },
             { field: 'name', title: '名字' },
             { field: 'sex', title: '性别' },
             { field: 'age', title: '年龄' },
             { field: 'name', title: '名字' },
              { field: 'sex', title: '性别' },
              { field: 'age', title: '年龄' },
              { field: 'name', title: '名字' },
              { field: 'sex', title: '性别' },
              { field: 'age', title: '年龄' },
              { field: 'name', title: '名字' },
             { field: 'sex', title: '性别' },
              { field: 'age', title: '年龄' },
              { field: 'name', title: '名字' },
              { field: 'sex', title: '性别' },
            { field: 'age', title: '年龄' },
           ]
        }
      },
      mounted () {
        // 延迟主要解决我进来页面初次卡，加载这么大的数据量。这里主要为了进来页面不卡，然后再去慢慢加载！
        setTimeout (() =>{
           this.reverseTable()
        })
      },
      methods: {
           // 反转
          reverseTable () {
             const data = Array.from({ length: 1000 }, (_, idx) => ({
               id: idx + 1,
               name: 'pl' + idx,
               sex: idx,
               age: idx + '岁'
            }))
            const buildData = this.newColumns.map(column => {
              const item = { col0: column.title }
              data.forEach((row, index) => {
                item[`col${index + 1}`] = row[column.field]
              })
              return item
            })
            // 固定项
            const buildColumns = [{
              field: 'col0',
              fixed: 'left',
              width: 80
            }]
            data.forEach((item, index) => {
              buildColumns.push({
                field: `col${index + 1}`,
                minWidth: 120
              })
            })
            this.$refs.plxTable.reloadData(buildData)
            this.$refs.plxTable.reloadColumn(buildColumns)
          }
      }
    }
  </script>
```
:::
