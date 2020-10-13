```html
  <template>
   <div>
      <p style="margin: 20px 0;">
           <el-button @click="setData(3)">变化数据为3条</el-button>
           <el-button @click="setData(2000)">变化数据为2000条</el-button>
           <el-button @click="setData(5000)">变化数据为5000条</el-button>
           <el-radio-group v-model="radio" style="margin-left:30px">
              <el-radio :label="1">数据变化滚动到顶部</el-radio>
              <el-radio :label="2">数据变化滚动不滚动到顶部</el-radio>
            </el-radio-group>
      </p>
     <u-table
          ref="plTable"
          :max-height="height"
          use-virtual
          @table-body-scroll="tableScroll"
          :data-changes-scroll-top="radio === 1"
          :row-height="rowHeight"
          border>
          <u-table-column type="index" width="100" fixed/>
          <u-table-column
             v-for="item in columns"
             :key="item.id"
             :resizable="item.resizable"
             :show-overflow-tooltip="item.showOverflow"
             :prop="item.prop"
             :label="item.label"
             :fixed="item.fixed"
             :width="item.width"/>
        </u-table>
    </div>
 </template>

  <script>
    export default {
      data() {
        return {
          radio: 1,
          height: 400,
          rowHeight: 50,
          columns: Array.from({ length: 10 }, (_, idx) => ({
              prop: 'address', id: idx, label: '地址' + idx, width: 200, showOverflow: true
          })),
        }
      },
      mounted () {
        this.setData(500)
      },
      methods: {
          setData (num) {
            let data = Array.from({ length: num }, (_, idx) => ({
                id: idx + 1,
                date: '2016-05-03',
                name: 1,
                ab: '欢迎使用u-table',
                address: 1 + idx
            }))
            this.$refs.plTable.reloadData(data)
          },
           tableScroll ({scrollTop, scrollLeft, table, judgeFlse}) {
              // {scrollTop， scrollLeft, table, judgeFlse: 这个参数返回一个boolean值，为true则代表表格滚动到了底部了，false没有滚动到底部，必须开起大数据渲染模式才能有值哦}, event
              console.log(scrollTop, scrollLeft, table, judgeFlse)
            }
      }
    }
  </script>
```
