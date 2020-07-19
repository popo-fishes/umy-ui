<template>
  <div class="tableApi width100">
      <p class="api-title">Table Attributes（表格属性）
          <el-button @click="AttributesFls = !AttributesFls">{{ AttributesFls ? '收起' : '展开' }}</el-button>
      </p>
      <u-table
              ref="plTableAttributes"
              v-if="AttributesFls"
              fixed-columns-roll
              :data="datas"
              beautify-table
              inverse-current-row
              header-drag-style
              row-key="uuid"
              border>
          <u-table-column
                  v-for="(item, index) in columnsAttributes"
                  :tree-node="item.treeNode"
                  :key="index"
                  :resizable="false"
                  :prop="item.prop"
                  :label="item.label"
                  :min-width="item.minWidth"
                  :width="item.width"/>
      </u-table>
      <p class="api-title" style="margin-top: 20px">Table Events（表格事件）
          <el-button @click="EventsFls = !EventsFls">{{ EventsFls ? '收起' : '展开' }}</el-button>
      </p>
      <u-table
              ref="plTableAttributes"
              fixed-columns-roll
              v-if="EventsFls"
              :data="data2"
              beautify-table
              inverse-current-row
              header-drag-style
              row-key="uuid"
              border>
          <u-table-column
                  v-for="(item, index) in columnsEvents"
                  :key="index"
                  :resizable="false"
                  :prop="item.prop"
                  :label="item.label"
                  :min-width="item.minWidth"
                  :width="item.width"/>
      </u-table>
      <p class="api-title" style="margin-top: 20px">Table Methods（表格方法）
          <el-button @click="MethodsFls = !MethodsFls">{{ MethodsFls ? '收起' : '展开' }}</el-button>
      </p>
      <u-table
              v-if="MethodsFls"
              ref="plTableAttributes"
              fixed-columns-roll
              :data="data3"
              beautify-table
              inverse-current-row
              header-drag-style
              row-key="uuid"
              border>
          <u-table-column
                  v-for="(item, index) in columnsMethods"
                  :key="index"
                  :resizable="false"
                  :prop="item.prop"
                  :label="item.label"
                  :min-width="item.minWidth"
                  :width="item.width"/>
      </u-table>
  </div>
</template>

<script>
    import {data,columns,eventsData, columnsEvents, columnsMethods, methodsData} from '../apiConfig/u-table-api'
    import {addUuid} from '../../../utils'
    export default {
        name: "uTableApi",
        data() {
            return {
                AttributesFls: false,
                EventsFls: false,
                MethodsFls: false,
                columnsAttributes: [],
                datas: [],
                columnsEvents: [],
                data2: [],
                columnsMethods: [],
                data3: [],
            }
        },
        mounted () {
            setTimeout(() => {
                this.columnsAttributes = columns
                this.datas = addUuid(data)
                this.columnsEvents = columnsEvents
                this.data2 = addUuid(eventsData)
                this.columnsMethods = columnsMethods
                this.data3 = addUuid(methodsData)
            })
        }
    }
</script>
