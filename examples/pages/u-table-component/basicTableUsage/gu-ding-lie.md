### 固定列

横向内容过多时，可选择固定列。

:::demo 固定列需要使用`fixed`属性，它接受 Boolean 值或者`left` ， `right`，表示左边固定还是右边固定。
```html
<template>
  <u-table
    :data="tableData"
    border
    style="width: 100%">
    <u-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </u-table-column>
    <u-table-column
      prop="name"
      label="姓名"
      width="120">
    </u-table-column>
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
      min-width="120">
    </u-table-column>
    <u-table-column
      fixed="right"
      label="操作"
      width="150">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </u-table-column>
  </u-table>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData: [{
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
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
      }
    }
  }
</script>
```
:::

