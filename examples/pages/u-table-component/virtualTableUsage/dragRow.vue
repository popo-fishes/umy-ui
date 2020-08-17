<template>
    <div>
        <h3>拖拽行</h3>
        <p>ux-grid使用 sortablejs 实现行移动，由于直接操作了 Dom 节点，需要与 Vue 的数据同步，必须设置 row-key （注：该示例仅供参考，具体逻辑请自行实现）</p>
        <p>你如果使用拖拽行，那么就是使用第三方的东西，<a href="https://github.com/SortableJS/Sortable" target="_blank">请先安装sortablejs</a></p>
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
        <pre>
            <code>{{ demo[0] }}</code>
            <code>{{ demo[1] }}</code>
        </pre>
    </div>
</template>

<script>
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
                tableData: [],
                demo: [
                    `<template>
    <div>
        <h3>拖拽行</h3>
        <p>ux-grid使用 sortablejs 实现行移动，由于直接操作了 Dom 节点，需要与 Vue 的数据同步，必须设置 row-key （注：该示例仅供参考，具体逻辑请自行实现）</p>
        <p>你如果使用拖拽行，那么就是使用第三方的东西，<a href="https://github.com/SortableJS/Sortable" target="_blank">请先安装sortablejs</a></p>
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
</template>`,
                    ` import Sortable from 'sortablejs/modular/sortable.core.esm.js';
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
    }`
                ]
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
</script>