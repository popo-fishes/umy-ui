### 美化表格(变好看一点)

使用inverse-current-row ? 必须开启highlight-current-row: 是否需要反选高亮当前行（当点击行默认为选中，必须点击其他行才能取消选中，这是element的原则，所以我改变了它。那么是否需要点击行选中，再次点击当前选中行就取消呢，请设置这个属性吧）

:::demo 当`u-table`元素中注入`data`对象数组后，开启beautifyTable属性，开启 header-drag-style（这个主要是让拖动列的线变化），表格会变好看点啦。
```html
  <template>
    <u-table
      :data="tableData"
       beautifyTable
       highlight-current-row
       inverse-current-row
       header-drag-style
      :border="true">
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
          }]
        }
      }
    }
  </script>
```
