<template>
  <div>
    <h3>固定列</h3>
    <p>横向内容过多时，可选择固定列。</p>
    <p>固定列需要使用`fixed`属性，它接受 Boolean 值或者`left` ， `right`，表示左边固定还是右边固定。</p>
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
        show-overflow-tooltip
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
    <div v-html="md" style="margin-top: 30px" class="width100"></div>
  </div>
</template>

<script>
  import md2 from '../../components/u-table-component/basicTableUsage/gu-ding-lie.md'
  export default {
    computed: {
      md () {
        return md2
      }
    },
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
