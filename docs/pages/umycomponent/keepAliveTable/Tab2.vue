<template>
  <div>
    <el-input style="margin-bottom: 20px" v-model="vals" placeholder="输入信息，在切换页面，看看是否页面被缓存啦?"></el-input>
    <ux-grid
      ref="plTable"
      :height="height"
      use-virtual
      showBodyOverflow="title"
      showHeaderOverflow="title"
      :row-height="rowHeight"
      border>
      <ux-table-column type="index" width="100" fixed/>
      <ux-table-column
        v-for="item in columns"
        :key="item.id"
        :resizable="item.resizable"
        :show-overflow-tooltip="item.showOverflow"
        :field="item.prop"
        :title="item.label"
        :fixed="item.fixed"
        :width="item.width"/>
    </ux-grid>
  </div>
</template>

<script>
    // keepAlive页面缓存 示例tab2
    export default {
        name: "Tab2",
        data() {
          return {
            vals: '',
            height: 400,
            rowHeight: 50,
            columns: Array.from({ length: 10 }, (_, idx) => ({
              prop: 'address', id: idx, label: '地址' + idx, width: 200, showOverflow: true
            })),
          }
        },
      mounted () {
        this.setData(1000)
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

<style scoped>

</style>
