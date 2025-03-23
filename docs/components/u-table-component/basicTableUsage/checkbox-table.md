```html
<template>
  <u-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    selectTrClass="selectTr"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <u-table-column
      type="selection"
      width="55">
    </u-table-column>
    <u-table-column
      label="日期"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </u-table-column>
    <u-table-column
      prop="name"
      label="姓名"
      width="120">
    </u-table-column>
    <u-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </u-table-column>
  </u-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
     <el-button @click="toggleSelection([tableData[3]], '固定选中')">选中第四行</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路上海市普陀区金沙江路上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows, type) {
        if (rows) {
          rows.forEach(row => {
            // 注意： 勾选方法与element不同哦
            // this.$refs.multipleTable.toggleRowSelection(row); // element表格是这样写的
            // 我们得这样写

            // 如果是固定选中
            if (type === '固定选中') {
            // toggleRowSelection方法参数不懂得去看文档api哦
              this.$refs.multipleTable.toggleRowSelection([
                 {
                   row: row,
                   selected: true
                 }
              ])
             // 下面这是切换选中
            } else {
              this.$refs.multipleTable.toggleRowSelection([
                 {
                   row: row
                 }
              ])
            }
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>
<style>
  .selectTr td { background: #ccc !important;color: red !important;}
</style>
```
