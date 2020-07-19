### 筛选

 1.如果是动态数据请通过 setFilter 方法更新，参数 filters 不支持动态数据

 2.changeOption(event, checked, option) 更新选项的状态

:::demo 3.filter-multiple控制筛选是否可多选， v-slot:filter可以控制列自定义筛选布局
```html
  <template>
   <div>
   <ux-grid
       highlightCurrentRow
       max-height="300"
       :data="tableData">
       <ux-table-column type="index" width="60"></ux-table-column>{
       <ux-table-column
        field="date"
        title="时间"
         sortable
        :filters="[{label: '2016-05-01', value: '2016-05-01'}, {label: '2016-05-02', value: '2016-05-02'}]"
         :filter-method="filterNameMethod"></ux-table-column>
       <ux-table-column field="address" title="地址" sortable :filters="[{label: 'Man', value: '1'}, {label: 'Woman', value: '0'}]" :filter-multiple="false"></ux-table-column>
       <ux-table-column field="tag" title="邮编" :filters="[{ data: '' }, { data: '' }]" :filter-method="filterAgeMethod">
          <!--自定义筛选模板-->
         <template v-slot:filter="{ $panel, column }">
           <!--column.filters就是去渲染的这个东西:filters="[{ data: '' }]，然后v-model绑定到了这个data属性啦-->
           <el-input type="type"
            v-for="(option, index) in column.filters"
            :key="index"
             v-model="option.data"
             @input="$panel.changeOption($event, option.data, option)"/>
         </template>
       </ux-table-column>
     </ux-grid>
   </div>
 </template>

  <script>
    export default {
      data() {
        return {
         tableData: [{
                  date: '2016-05-02',
                  name: '王小虎1',
                  address: '上海市普陀区金沙江路 1518 弄',
                  tag: '1'
                }, {
                  date: '2016-05-04',
                  name: '王小虎2',
                  address: '上海市普陀区金沙江路 1517 弄',
                  tag: '2'
                }, {
                  date: '2016-05-01',
                  name: '王小虎3',
                  address: '上海市普陀区金沙江路 1519 弄',
                  tag: '3'
                }, {
                  date: '2016-05-03',
                  name: '王小虎4',
                  address: '上海市普陀区金沙江路 1516 弄',
                  tag: '4'
                }, {
                   date: '2016-05-20',
                   name: '王小虎5',
                   address: '上海市普陀区金沙江路 1516 弄',
                   tag: '5'
                 }, {
                     date: '2016-05-13',
                     name: '王小虎6',
                     address: '上海市普陀区金沙江路 1516 弄',
                     tag: '6'
                   }]
        }
      },
      mounted () {
      },
      methods: {
          filterNameMethod({value, row, column}) {
              const property = column['property'];
              return row[property] === value;
          },
           filterAgeMethod ({ option, row }) {
            return row.tag === option.data
          }
      }
    }
  </script>
```
:::
