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
        :borderLine="false"
        :resizable="false"
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
