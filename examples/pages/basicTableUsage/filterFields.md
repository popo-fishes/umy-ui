### 筛选字段侧滑弹窗（跟表格没有关系的属性，是pl-table新增的弹窗）

横向内容过多时，可选择筛选字段侧滑弹窗。

首先你得设置dialog-data侧滑弹窗的数据，你不知道数据格式可以看api哦， 然后你可以设置field-sort（当前你可以不设置，默认就为true），就可以拖动字段上下移动排序啦，记住不是拖动表格行，是侧滑弹窗里面的字段名。

然后你设置完上面的属性，表格绑定个ref属性，最后你现在就差一个方法来触动弹窗打开啦。你可以点击按钮啊或者什么（随便你），然后调用方法plDialogOpens就可以啦！

:::demo 你可以点击确认后拿到勾选的字段，然后去过滤你的列啦，这个可以跟后端配合下哦，点击确认吧当前选中的存后端，然后刷新表格筛选列吧！
```html
<template>
<div>
  <el-button @click="openDialog">点我可以打开筛选字段弹窗</el-button>
  <u-table
    style="margin-top: 20px;"
    ref="plTable"
    :data="tableData"
    height=500
    field-title="u-table选择显示字段"
    :field-sort="true"
    :dialog-data="dialogData"
    border>
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
      width="120">
    </u-table-column>
    <u-table-column
      fixed="right"
      label="操作"
      width="160">
      <template slot="header" slot-scope="scope">
          <div>操作<span style="margin-left: 10px;color:red" @click="openDialog">点我试试看</span></div>
     </template>
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </u-table-column>
  </u-table>
</div>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      },
      openDialog () {
        this.$refs.plTable.plDialogOpens()
      }
    },

    data() {
      return {
        // dialogData跟你的列数， 最好自己保持一致吧，这个随便你保持一致还是不保持一致
        dialogData: [
          // { name: '我的', // 字段名 state: true, // 选择状态 disabled: true // 是否禁用 }]
          { name: '日期',  state: true, disabled: true },
          { name: '姓名', disabled: true },
          { name: '省份' },
          { name: '地址' },
          { name: '邮编' },
        ],
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
        },
        {
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
        },
         {
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

