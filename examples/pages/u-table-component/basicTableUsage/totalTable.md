### 表尾合计行(与el-table的合计有很大的区别)

若表格展示的是各类数字，可以在表尾显示各列的合计。
:::demo 将`show-summary`设置为`true` 且设置 total-option属性就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过`sum-text`配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用`summary-method`并传入一个方法，返回一个二维数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考本例中的第二个表格。
```html
<template>
  <u-table
    :data="tableData"
     height="400"
    :total-option="totalOption"
    show-summary>
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
  <p class="fenge" style="color: red">
    如果你不想使用上面的表格total-option固定合计方式，那么自己写自定义方式吧。 下面的表格平均值出现小数点后很多位，是因为没去取小数点后几位啦！
    <br />
    如果你想你的合计围栏添加多个，你可以像下面这样自定义合计哦
  </p>
  <u-table
    :data="tableData"
    height="500"
    :summary-method="summaryMethod"
    show-summary
    style="margin-top: 20px">
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
</template>

<script>
  export default {
    data() {
      return {
        totalOption: [
           {label: '数值 1', 'unit': '元'},
           {label: '数值 2', 'unit': '个'}
        ],
        tableData: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4',
          amount3: 15
        }, {
           id: '12987126',
           name: '王小虎',
           amount1: '539',
           amount2: '4',
           amount3: 15
         }, {
             id: '12987126',
             name: '王小虎',
             amount1: '539',
             amount2: '4',
             amount3: 15
           }, {
             id: '12987126',
             name: '王小虎',
             amount1: '539',
             amount2: '4',
             amount3: 15
           }, {
             id: '12987126',
             name: '王小虎',
             amount1: '539',
             amount2: '4',
             amount3: 15
           }]
      };
    },
    methods: {
       summaryMethod ({ columns, data }) {
           // 平均值算法（不需要自己去掉）
           function cacl(arr, callback) {
               let ret;
               for (let i=0; i<arr.length;i++) {
                   ret = callback(arr[i], ret);
               }
               return ret;
           }
           // 平均值算法（不需要自己去掉）
           Array.prototype.sum = function () {
               return cacl(this, function (item, sum) {
                   if (typeof (sum) == 'undefined') {
                       return item;
                   }
                   else {
                       return sum += item;
                   }
               });
           };
           // 平均值算法（不需要自己去掉）
           Array.prototype.avg = function () {
               if (this.length == 0) {
                   return 0;
               }
               return this.sum(this) / this.length;
           };
           const means = [] // 合计
           const fenceSums = [] // 平均值
           columns.forEach((column, columnIndex) => {
               if (columnIndex === 0) {
                   means.push('合计')
                   fenceSums.push('平均值')
               } else {
                   const values = data.map(item => Number(item[column.property]));
                   // 合计
                   if (!values.every(value => isNaN(value))) {
                       means[columnIndex] = values.reduce((prev, curr) => {
                           const value = Number(curr);
                           if (!isNaN(value)) {
                               return prev + curr;
                           } else {
                               return prev;
                           }
                       }, 0);
                       // means[columnIndex] += ' 元'
                       // 改变了ele的合计方式，扩展了合计场景
                       // 你以为就只有上面这样玩吗？错啦，你还可以自定义样式哦
                       // means[columnIndex] = '<span style="color: red">' + means[columnIndex] + '元</span>'
                       means[columnIndex] = '<span style="color: red">' + means[columnIndex] + '元</span><br/><span>123</span>'
                   } else {
                       means[columnIndex] = '';
                   }
                   // 平均值
                   const precisions = [];
                   let notNumber = true;
                   values.forEach(value => {
                       if (!isNaN(value)) {
                           notNumber = false;
                           let decimal = ('' + value).split('.')[1];
                           precisions.push(decimal ? decimal.length : 0);
                       }
                   });
                   if (!notNumber) {
                       fenceSums[columnIndex] = values.avg()
                   } else {
                       fenceSums[columnIndex] = '';
                   }
               }
           })
           // 返回一个二维数组的表尾合计(不要平均值，你就不要在数组中添加)
           return [means, fenceSums]
       },
    }
  };
</script>
```
:::
