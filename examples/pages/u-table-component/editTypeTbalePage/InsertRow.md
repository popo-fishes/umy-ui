### 插入行

  1.调用insertRow 函数插入临时数据

:::demo
```html
  <template>
   <div>
     <p>
         <el-button @click="insertEvent()">新增</el-button>
         <el-button @click="insertEvent(-1)">在最后行插入</el-button>
         <el-button @click="getInsertEvent">获取新增</el-button>
         <el-button @click="saveEvent">保存</el-button>
     </p>
      <ux-grid border
                show-overflow
                ref="plxTable"
                :max-height="400"
                :data="tableData"
                :highlightCurrentRow="false"
                :edit-config="{trigger: 'click', mode: 'row'}">
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
        </ux-grid>
   </div>
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
         this.tableData = Array.from({ length: 3 }, (_, idx) => ({
             id: idx + 1,
             date: '2016-05-03',
             name: '张三' + idx,
             sex: 'nan',
             age: 18 + idx
          }))
       },
       methods: {
          // 转换男女
          getLabel (val) {
             const item = this.sexList.filter(item => item['value'] === val)[0]
             return item ? item.label : ''
           },
           // 添加插入行
           async insertEvent (row) {
            let record = {
                name: '李四',
               sex: 'nv',
               age: 18
            }
            // 加入行, 表示加入行的row对象，row为空则插入第一行，为-1插入最后一行
            let { row: newRow } = await this.$refs.plxTable.insertRow(record, row)
            // 激活单元格编辑
            await this.$refs.plxTable.setActiveRow(newRow)
          },
          getInsertEvent () {
              let insertRecords = this.$refs.plxTable.getInsertRecords()
              console.log(insertRecords)
          },
          saveEvent () {
            const insertRecords = this.$refs.plxTable.getInsertRecords()
            console.log(insertRecords)
          }
       }
    }
  </script>
```
:::
