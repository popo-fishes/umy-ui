### 数据变化(基础虚拟，不解决列多情况)

 建议开启使用：show-body-overflow 和 show-header-overflow

（注：启用纵向虚拟滚的后不支持动态行高，如果要支持动态行高，将虚拟滚动关闭即可）。

 (注：数据变化默认会滚动到顶部，你可以关闭data-changes-scroll-top就不会滚动到顶部啦！)

:::demo 当`u-table`元素中注入`data`对象数组后，大量数据不建议使用双向绑定的 data 属性（vue 监听会大数据会短暂的卡顿），建议使用 reloadData 函数,请看表格方法)。
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
          }
      }
    }
  </script>
```
:::
