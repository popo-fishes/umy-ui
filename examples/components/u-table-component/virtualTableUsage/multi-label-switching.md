
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
                   ref="plTableTab1"
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
                ref="plTableTab2"
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
         <ux-grid
               ref="plTableTab3"
               :data="tableData"
               :height="300"
               showBodyOverflow="title"
               showHeaderOverflow="title"
               border>
               <ux-table-column
                  v-for="item in columns"
                  :key="item.id"
                  :resizable="item.resizable"
                  :show-overflow="item.showOverflow"
                  :field="item.prop"
                  :title="item.label"
                  :fixed="item.fixed"
                  :width="item.width"/>
         </ux-grid>
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
         tableData: Array.from({ length: 500 }, (_, idx) => ({
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
      },
      watch: {
        radio1: function (val) {
           if (val === 'tab1') {
              this.$refs.plTableTab1.doLayout()
           } else if (val === 'tab2') {
              this.$refs.plTableTab2.doLayout()
           } else {
              this.$refs.plTableTab3.doLayout()
           }
        }
      }
    }
  </script>
```
