### 多标签切换

:::demo
```html
  <template>
   <div>
     <p style="margin: 20px 0;">
        <el-radio-group v-model="radio1" @change="tabchange">
             <el-radio-button label="tab1">tab1</el-radio-button>
             <el-radio-button label="tab2">tab2</el-radio-button>
             <el-radio-button label="tab3">tab3</el-radio-button>
        </el-radio-group>
      </p>
         <div v-show="radio1 === 'tab1'">
             <u-table
                   ref="plTable"
                   :data="tableData"
                   :height="300"
                   use-virtual
                   showBodyOverflow="title"
                   showHeaderOverflow="title"
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
      <div v-show="radio1 === 'tab2'">
          <u-table
                ref="plTable"
                :data="tableData"
                :height="300"
                use-virtual
                showBodyOverflow="title"
                showHeaderOverflow="title"
                border>
                <u-table-column type="selection" width="60"></u-table-column>
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
     <div v-show="radio1 === 'tab3'">
         <u-table
               ref="plTable"
               :data="tableData"
               :height="300"
               use-virtual
               showBodyOverflow="title"
               showHeaderOverflow="title"
               border>
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
   </div>
 </template>

  <script>
    export default {
      data() {
        return {
          radio1: 'tab1',
          columns: Array.from({ length: 10 }, (_, idx) => ({
              prop: 'address', id: idx, label: '地址地址地址地址地址地址地址地址地址地址地址' + idx, width: 200
          })),
         tableData: Array.from({ length: 20 }, (_, idx) => ({
                id: idx + 1,
                date: '2016-05-03',
                name: 1,
                ab: '欢迎使用u-table',
                address: '北京市' + idx + 1
           }))
        }
      },
      methods: {
        tabchange() {

        }
      }
    }
  </script>
```
:::
