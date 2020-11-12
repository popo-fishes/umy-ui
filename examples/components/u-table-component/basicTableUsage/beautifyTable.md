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
    <ux-grid
          :data="tableData"
          beautifyTable
          ref="plxTree"
          height="300"
          :checkbox-config="{highlight: true}">
      <ux-table-column type="checkbox" width="50" resizable fixed="left"></ux-table-column>
      <ux-table-column field="name" resizable title="Name" width="200"></ux-table-column>
      <ux-table-column field="size" resizable title="Size" width="200"></ux-table-column>
      <ux-table-column field="type" resizable title="Type" width="200"></ux-table-column>
      <ux-table-column field="date" resizable title="Date" width="200"></ux-table-column>
      <ux-table-column field="name" title="Name"></ux-table-column>
  </ux-grid>
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
