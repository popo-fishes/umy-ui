### 合并行或列

多行或多列共用一个数据时，可以合并行或列。
:::demo 通过给`table`传入`span-method`方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行`row`、当前列`column`、当前行号`rowIndex`、当前列号`columnIndex`四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表`rowspan`，第二个元素代表`colspan`。 也可以返回一个键名为`rowspan`和`colspan`的对象。

```html
<template>
  <div>
   <p class="fenge" style="color: red">合并列</p>
    <u-table
      :data="tableData"
      :span-method="arraySpanMethod"
      border
      style="width: 100%">
      <u-table-column
        prop="id"
        label="ID"
        width="180">
      </u-table-column>
      <u-table-column
        prop="name"
        label="姓名">
      </u-table-column>
      <u-table-column
        prop="amount1"
        sortable
        label="数值 1">
      </u-table-column>
      <u-table-column
        prop="amount2"
        sortable
        label="数值 2">
      </u-table-column>
      <u-table-column
        prop="amount3"
        sortable
        label="数值 3">
      </u-table-column>
    </u-table>
    <p class="fenge" style="color: red">合并行</p>
    <u-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px">
      <u-table-column
        prop="id"
        label="ID"
        width="180">
      </u-table-column>
      <u-table-column
        prop="name"
        label="姓名">
      </u-table-column>
      <u-table-column
        prop="amount1"
        label="数值 1（元）">
      </u-table-column>
      <u-table-column
        prop="amount2"
        label="数值 2（元）">
      </u-table-column>
      <u-table-column
        prop="amount3"
        label="数值 3（元）">
      </u-table-column>
    </u-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      };
    },
    methods: {
      arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },

      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        if (columnIndex === 0) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        }
      }
    }
  };
</script>
```
:::
