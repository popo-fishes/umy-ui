```html
<template>
    <div>
      <ux-grid
                border
                row-key
                height="400"
                ref="plxTable"
                :data="tableData">
            <ux-table-column
                    v-for="item in tableColumn"
                    :key="item.id"
                    :resizable="item.resizable"
                    :field="item.field"
                    :title="item.title"
                    :sortable="item.sortable"
                    :width="item.minWidth"
                    :fixed="item.fixed"/>
            <ux-table-column title="额外信息" minWidth="60" field="describe"></ux-table-column>
        </ux-grid>
    </div>
</template>
     import Sortable from 'sortablejs/modular/sortable.core.esm.js';
    export default {
        name: "dragRow",
        data () {
            return {
                tableColumn: [
                    { field: 'name', title: 'Name', fixed: 'left', minWidth: 200 },
                    { field: 'sex', title: 'Sex', minWidth: 100 },
                    { field: 'age', title: 'Age', minWidth: 150 },
                    { field: 'describe', title: 'describe', minWidth: 200, showOverflow: true }
                ],
                tableData: []
            }
        },
        mounted () {
            this.tableData = Array.from({ length: 20 }, (_, idx) => ({
                id: idx + 1,
                name: 'pl' + idx,
                sex: idx,
                age: 18,
                describe: '欢迎使用plx' + idx
            }))
            this.columnDrop()
        },
        beforeDestroy () {
            if (this.sortable) {
                this.sortable.destroy()
            }
        },
        methods: {
            columnDrop () {
                this.$nextTick(() => {
                    let plxTable = this.$refs.plxTable
                    // 关于sortable的配置https://www.cnblogs.com/xiangsj/p/6628003.html
                    this.sortable = Sortable.create(plxTable.$el.querySelector('.body--wrapper .plx-table--body tbody'), {
                        handle: ".plx-body--row",  // Drag handle selector within list items
                        // 拖拽结束
                        onEnd: ({ item, newIndex, oldIndex }) => {
                            let currRow = this.tableData.splice(oldIndex, 1)[0]
                            this.tableData.splice(newIndex, 0, currRow)
                        }
                    })
                })
            }
        }
    }
    
```
