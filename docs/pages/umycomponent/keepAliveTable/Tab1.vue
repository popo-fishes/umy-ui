<template>
  <div>
    <el-input style="margin-bottom: 20px" v-model="vals" placeholder="输入信息，在切换页面，看看是否页面被缓存啦?"></el-input>
    <u-table
      ref="plTable"
      :data="tableData"
      :height="height"
      use-virtual
      showBodyOverflow="title"
      showHeaderOverflow="title"
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
    // keepAlive页面缓存 示例tab1
    export default {
        name: "Tab1",
        data() {
          return {
            vals: '',
            height: 0,
            rowHeight: 50,
            columns: Array.from({ length: 10 }, (_, idx) => ({
              prop: 'address', id: idx, label: '地址地址地址地址地址地址地址地址地址地址地址' + idx, width: 200
            })),
            tableData: Array.from({ length: 100 }, (_, idx) => ({
              id: idx + 1,
              date: '2016-05-03',
              name: 1,
              ab: '欢迎使用u-table',
              address: '北京市天安门天安门天安门北京市天安门天安门天安门北京市天安门天安门天安门'
            }))
          }
        },
         mounted () {
           this.height = 500 // 动态设置高度
       },
    }
</script>

<style scoped>

</style>
