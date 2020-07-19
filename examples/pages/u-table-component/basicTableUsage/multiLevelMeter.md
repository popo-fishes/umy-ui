### 多级表头

数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。

:::demo 只需要在 u-table-column 里面嵌套 u-table-column，就可以实现多级表头。
```html
<template>
  <u-table
    :data="tableData"
    style="width: 100%">
    <u-table-column
      prop="date"
      label="日期"
      width="150">
    </u-table-column>
    <u-table-column label="配送信息">
      <u-table-column
        prop="name"
        label="姓名"
        width="120">
      </u-table-column>
      <u-table-column label="地址">
        <u-table-column
          prop="province"
          label="省份"
          width="120">
        </u-table-column>
        <u-table-column
          prop="city"
          label="市区"
          width="120">
        </u-table-column>
        <u-table-column
          prop="address"
          label="地址"
          width="300">
        </u-table-column>
        <u-table-column
          prop="zip"
          label="邮编"
          width="120">
        </u-table-column>
      </u-table-column>
    </u-table-column>
  </u-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    }
  }
</script>
```
:::
