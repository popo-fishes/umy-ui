```html
  <template>
   <div>
     <u-table
          ref="plTable"
          :data="tableData"
          :height="height"
          use-virtual
          :row-height="rowHeight"
          border>
           <u-table-column type="index" width="100" fixed/>
           <u-table-column
                prop="date"
                label="日期"
                width="150">
              </u-table-column>
              <u-table-column label="配送信息">
                <u-table-column
                  prop="name"
                  label="姓名"
                  width="120">
                </u-table-column>
                <u-table-column label="地址">
                  <u-table-column
                    prop="province"
                    label="省份打打123"
                    width="220">
                  </u-table-column>
                  <u-table-column
                    prop="city"
                    label="市区"
                    width="220">
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
                </u-table-column>
              </u-table-column>
        </u-table>
    </div>
 </template>

  <script>
    export default {
      data() {
        return {
          height: 500,
          rowHeight: 50,
         tableData:Array.from({ length: 500 }, (_, idx) => ({
                id: idx + 1,
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
           }))
        }
      },
      methods: {
      }
    }
  </script>
```
