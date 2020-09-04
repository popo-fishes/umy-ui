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
