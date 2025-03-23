```html
  <template>
    <u-table
      :data="tableData"
      :border="false"
      style="width: 100%">
      <template slot="empty">
            没有查询到符合条件的记录
       </template>
      <u-table-column
        prop="name"
        label="名字"
        width="180">
      </u-table-column>
      <u-table-column
        prop="sex"
        label="性别"
        width="180">
      </u-table-column>
      <u-table-column
        prop="age"
        label="年龄">
        <template v-slot="scope">
            <el-select v-model="scope.row.sex">
                             <el-option v-for="item in sexList" :key="item.value" :label="item.label" :value="item.value"></el-option>
                           </el-select>
        </template>
      </u-table-column>
    </u-table>
  </template>

  <script>
    export default {
      data() {
        return {
          sexList: [
             { value: 1,label: '男' },
             { value: 2,label: '女'},
             { value: 3,label: '未知'}
          ],
          tableData: [{
            sex: '男',
            name: '王小虎',
            age: '15'
          }, {
            sex: '女',
            name: '王小明',
            age: '15'
          }, {
            sex: '女',
            name: '王小丽',
            age: '15'
          }, {
            sex: '未知',
            name: '王小狗',
            age: '15'
          }]
        }
      }
    }
  </script>
```
