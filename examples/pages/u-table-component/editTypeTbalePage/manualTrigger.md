### 手动触发编辑表格(表格数据少，所以用data方式赋值表格数据。这是个示例)

  1.首先在ux-grid上绑定 keep-source属性，edit-config = {trigger: 'manual' // 手动触发，意思就是需要点击按钮调用方法触发， mode: 'row' // 作用点在谁身上 row表示行，cell: 表示单元格}

  2.通过表尾来实现合计功能，数据发生变化时实时统计，对于某些场景下如果需要频繁计算的可以手动调用 updateFooter 函数(如你去试试年龄那个单元格，加加减减试试看)

  3.如果你的表格数据量不大呢，你还可以合并列合并行。

:::demo 4.设置 keep-source 开启保持原始值状态，对于某些需要局部保存的场景，可以在数据保存完成后调用 reloadRow 方法加载行数据并恢复到初始状态
```html
  <template>
   <ux-grid border
             show-overflow
             ref="plxTable"
             keep-source
             height="500"
             :data="tableData"
             :highlightCurrentRow="false"
             show-summary
             :summaryMethod="summaryMethod"
             :spanMethod="rowspanMethod"
             :edit-config="{trigger: 'manual', mode: 'row'}">
             <ux-table-column type="checkbox" width="60"></ux-table-column>
             <ux-table-column type="index" width="80"></ux-table-column>
             <ux-table-column field="name" title="名字" width="140" edit-render>
               <template v-slot:edit="scope">
                 <el-input v-model="scope.row.name"></el-input>
               </template>
             </ux-table-column>
             <ux-table-column field="age" title="年龄"  width="160" edit-render>
               <template v-slot:header="{ column }">
                 <span>{{ column.title }}</span>
               </template>
               <template v-slot:edit="{ row }">
                  <el-input
                      v-model="row.age"
                      type="number"
                      placeholder="请输入内容"
                      @input="updateFooterEvent(row.age)"
                      style="width: 100%"></el-input>
               </template>
             </ux-table-column>
             <ux-table-column field="sex" title="性别" min-width="140" edit-render>
               <template v-slot:edit="scope">
                 <el-select v-model="scope.row.sex" @change="$refs.plxTable.updateStatus(scope)">
                   <el-option v-for="item in sexList" :key="item.value" :label="item.label" :value="item.value"></el-option>
                 </el-select>
               </template>
               <template v-slot="{ row }">{{ getLabel(row.sex) }}</template>
             </ux-table-column>
               <ux-table-column title="操作" width="200">
                 <template v-slot="{ row }">
                        <!--判断行是否激活了, 编辑按钮执行的方式就是为了去激活-->
                        <template v-if="$refs.plxTable.isActiveByRow(row)">
                            <el-button @click="saveEvent(row)" type="primary">保存</el-button>
                            <el-button @click="cancelRowEvent(row)">取消</el-button>
                       </template>
                       <template v-else>
                           <el-button @click="editRowEvent(row)">编辑</el-button>
                        </template>
                 </template>
               </ux-table-column>
           </ux-grid>
  </template>

  <script>
    export default {
       data () {
           return {
             tableData: [],
             columns: [],
             sexList: [
                { value: 'nan',label: '男' },
                { value: 'nv',label: '女'},
                { value: 'weizhi',label: '未知'}
             ]
           }
         },
       mounted () {
         // 延迟加载
         this.tableData = Array.from({ length: 10 }, (_, idx) => ({
             id: idx + 1,
             date: '2016-05-03',
             name: '张三' + idx,
             sex: 'nan',
             age: 18 + idx
          }))
       },
       methods: {
          // 点击保存
          saveEvent(row) {
            // 判断是否发生改变
            console.log(this.$refs.plxTable.isUpdateByRow(row))
            // 你也可以不使用这个判断，我是给示例，没做个性化需求
            if (this.$refs.plxTable.isUpdateByRow(row)) {
                  // ...保存相关的逻辑（后端的呀，或者前端的呀）
                  // 清除表格激活状态
                  this.$refs.plxTable.clearActived().then(() => {
                     // 局部保存，并将行数据恢复到初始状态（如果 第二个参数record 为空则不改动行数据，只恢复状态）
                     // 你不执行这个reloadRow，代表下次进来你上面的这个if还是会执行，不然下次点击保存，还是保存成功哦！状态没改变哦
                     this.$refs.plxTable.reloadRow(row, null, null)
                     // 如果，假如你保存了后端给你个当前行的row，那么你需要赋值给表格行呢，你就需要把后端给你的row填到第二个参数位置
                     // this.$refs.plxTable.reloadRow(row, 后端的row, null)
                     // 第三个参数呢就是只改变当前行中的call单个单元格。第三个参数是row中的字段名（field属性的值）
                  })
                  this.$message({
                    message: '恭喜你，保存成功',
                    type: 'success'
                 });
            } else {
               this.$message({
                  message: '保存失败，你没改变当前行的数据',
                  type: 'error'
               });
            }
          },
          // 转换男女
          getLabel (val) {
             const item = this.sexList.filter(item => item['value'] === val)[0]
             return item ? item.label : ''
           },
          // 点击编辑按钮，激活行状态-> 为编辑状态
          editRowEvent (row) {
             this.$refs.plxTable.setActiveRow(row)
          },
          // 取消
          cancelRowEvent (row) {
            // 清除表格激活状态
            this.$refs.plxTable.clearActived().then(() => {
               // 还原行数据
               this.$refs.plxTable.revertData(row)
            })
          },
          // 合计方法
          summaryMethod ({ columns, data }) {
                const means = [] // 合计
                columns.forEach((column, columnIndex) => {
                  if (columnIndex === 0) {
                      means.push('合计')
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
                          means[columnIndex] += ' 岁啦，哈哈'
                      } else {
                          means[columnIndex] = '';
                      }
                  }
              })
               // 返回一个二维数组的表尾合计
               return [means]
           },
           // 更新合计
           updateFooterEvent (num) {
             // 这里执行了updateFooter，然后就自动会去执行你的summaryMethod合计方法啦
             this.$refs.plxTable.updateFooter()
           },
           // 通用行合并函数（将相同多列数据合并为一行）
           rowspanMethod ({ row, $rowIndex, column, data, $columnIndex }) {
            if ($columnIndex === 2) {
              if ($rowIndex % 2 === 0) {
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
    }
  </script>
```
:::
