<template>
    <div>
      <h3>虚拟树形表格懒加载</h3>
      <p><a href="https://github.com/u-leo/umy-ui/blob/master/examples/pages/umycomponent/virtualTreeTableLazy.vue" target="_blank">点击查看当前demo页面的代码</a></p>
      <p>设置 treeConfig里面的lazy 属性为 true 与加载函数 load 。通过指定 row 中的 hasChildren 字段来指定哪些行是包含子节点。children 与 hasChildren 都可以通过treeConfig配置</p>
        <u-table
                ref="plTreeTable"
                fixed-columns-roll
                beautify-table
                header-drag-style
                :height="height"
                :treeConfig="{
              children: 'children',
              expandAll: false,
              lazy: true,
              load: load,
              hasChildren: 'hasChildren'}"
                @toggle-tree-expand="toggleTreeExpand"
                use-virtual
                row-id="id"
                border>
            <!--u-table大数据表格 你需要在列上指定某个列显示展开收起 treeNode属性-->
            <u-table-column
                    :tree-node="true"
                    prop="address"
                    label="我是树节点"
                    :width="200"/>
            <u-table-column
                    v-for="item in columns"
                    :key="item.id"
                    :prop="item.prop"
                    :label="item.label"
                    :width="item.width"/>
        </u-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                height: 400,
                columns: Array.from({ length: 10 }, (_, idx) => ({
                    prop: 'address', id: idx, label: '地址' + idx, width: 200
                }))
            }
        },
        mounted () {
            // console.log(500 + (500 * 500) + (500 * 500 * 10))
            const data2 =  Array.from({ length: 100 }, (_, idx) => ({
                id: idx + '_' + 1,
                date: '2016-05-03',
                name: 1,
                ab: '欢迎使用u-table',
                address: idx,
            }));
            const data = [
                {
                    id: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    id: 2,
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    id: 3,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    hasChildren: true
                }, {
                    id: 4,
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    id: 5,
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }, {
                    id: 6,
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            // 设置表格数据
            this.$refs.plTreeTable.reloadData([ ...data, ...data2])
        },
        methods: {
            // 收起展开时触发
            toggleTreeExpand (row, treeExpanded, event) {
                console.log(row, treeExpanded, event)
            },
            load (row, resolve) {
                // console.log(row)
                // row 你可以根据里面的id，去拿后端数据啦
                setTimeout(() => {
                    if (row.id === 3) {
                        resolve([
                            {
                                id: 31,
                                date: '2016-05-01',
                                name: '王小虎',
                                address: '上海市懒加载1',
                                hasChildren: true
                            }, {
                                id: 32,
                                date: '2016-05-01',
                                name: '王小虎',
                                address: '上海市懒加载2'
                            }
                        ])
                    } else if (row.id === 31){
                        resolve([
                            {
                                id: 33,
                                date: '2016-05-01',
                                name: '王小虎',
                                address: '上海市懒加载3',
                            }, {
                                id: 34,
                                date: '2016-05-01',
                                name: '王小虎',
                                address: '上海市懒加载4'
                            }
                        ])
                    }
                }, 1000)
            }
        }
    }
</script>

<style scoped>

</style>
