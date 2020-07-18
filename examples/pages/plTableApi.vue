<template>
  <div class="tableApi width100">
      <p class="api-title">Table Attributes（表格属性）</p>
      <u-table
              ref="plTableAttributes"
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
      <p class="api-title" style="margin-top: 20px">Table Events（表格事件）</p>
      <u-table
              ref="plTableAttributes"
              fixed-columns-roll
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
      <p class="api-title" style="margin-top: 20px">Table Methods（表格方法）</p>
      <u-table
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
    import {data,columns,eventsData, columnsEvents, columnsMethods, methodsData} from '../apiFile/u-table-api'
    import {addUuid} from '../utils'
    export default {
        name: "plTableApi",
        data() {
            return {
                columnsAttributes: columns,
                datas:addUuid(data),
                columnsEvents: columnsEvents,
                data2:addUuid(eventsData),
                columnsMethods: columnsMethods,
                data3:addUuid(methodsData),
            }
        }
    }
</script>
