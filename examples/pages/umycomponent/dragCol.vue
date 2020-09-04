<template>
    <div class="sortable-column-demo">
        <h3>拖拽列</h3>
        <p>ux-grid使用 sortablejs 实现列移动，由于直接操作了 Dom 节点，需要与 Vue 的数据同步，必须设置 column-key （注：该示例仅供参考，具体逻辑请自行实现）</p>
        <p>你如果使用拖拽列，那么就是使用第三方的东西，<a href="https://github.com/SortableJS/Sortable" target="_blank">请先安装sortablejs</a></p>
        <ux-grid
                border
                column-key
                height="500"
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
        <div v-html="md" style="margin-top: 30px" class="width100"></div>
    </div>
</template>

<script>
    // Default SortableJS
    //   import Sortable from 'sortablejs';
    // Core SortableJS (without default plugins)
    //   import Sortable from 'sortablejs/modular/sortable.core.esm.js';
    // Complete SortableJS (with all plugins)
    //   import Sortable from 'sortablejs/modular/sortable.complete.esm.js';
    import md2 from '../../components/u-table-component/virtualTableUsage/dragCol.md'
    import Sortable from 'sortablejs';
    export default {
        name: "dragCol",
        computed: {
          md () {
            return md2
          }
        },
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
            this.tableData = Array.from({ length: 50 }, (_, idx) => ({
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
                    this.sortable = Sortable.create(plxTable.$el.querySelector('.body--wrapper .plx-table--header .plx-header--row'), {
                        // 列表项中的拖动控制柄选择器 拖拽区域，默认为 .plx-header--row 的 子元素，
                        // 下面（这个意思呢）是排除掉plx-header--column拖拽列中的固定列部分
                        handle: '.plx-header--column:not(.col--fixed)',
                        ghostClass: 'dragColbg',
                        chosenClass: 'dragColbg',
                        // 拖拽结束
                        onEnd: ({ item, newIndex, oldIndex }) => {
                            // fullColumn: 全量表头列   tableColumn: 当前渲染中的表头列
                            let { fullColumn, tableColumn } = plxTable.getTableColumn()
                            let targetThElem = item
                            let wrapperElem = targetThElem.parentNode
                            let newColumn = fullColumn[newIndex]
                            if (newColumn.fixed) {
                                // 错误的移动
                                if (newIndex > oldIndex) {
                                    wrapperElem.insertBefore(targetThElem, wrapperElem.children[oldIndex])
                                } else {
                                    wrapperElem.insertBefore(wrapperElem.children[oldIndex], targetThElem)
                                }
                                return this.$message({ message: '固定列不允许拖动！', status: 'error' })

                            }
                            // 转换真实索引
                            let oldColumnIndex = plxTable.getColumnIndex(tableColumn[oldIndex])
                            let newColumnIndex = plxTable.getColumnIndex(tableColumn[newIndex])
                            // 移动到目标列
                            let currRow = fullColumn.splice(oldColumnIndex, 1)[0]
                            fullColumn.splice(newColumnIndex, 0, currRow)
                            // 加载列
                            plxTable.loadColumn(fullColumn)
                        }
                    })
                })
            }
        }
    }
</script>

<style lang="scss">
    .dragColbg {
        background-color: #409eff;
    }
    .sortable-column-demo .plx-header--row .plx-header--column.col--fixed {
        cursor: no-drop;
    }
</style>
