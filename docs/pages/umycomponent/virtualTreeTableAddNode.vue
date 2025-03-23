<template>
    <div>
        <h3>虚拟树形表格插入节点</h3>
        <p>对于虚拟树表格添加节点呢，最好使用修改数据源方式去修改</p>
        <p>（注：内置的 CRUD 管理器是不支持插入子节点的，如果要往子节点插入或删除节点数据，可以直接操作数据源）</p>
        <p>ux-grid树的添加删除同这个类似哦，文档没给出ux树的示例，可以根据这个模仿吧！</p>
        <p><a href="https://github.com/u-leo/umy-ui/blob/master/examples/pages/umycomponent/virtualTreeTableAddNode.vue" target="_blank">点击查看当前demo页面的代码</a></p>
      <p style="margin: 20px 0;">
        <el-button @click="$refs.plTreeTable2.toggleTreeExpansion(datas[0])">切换第一个</el-button>
        <el-button @click="$refs.plTreeTable2.setTreeExpansion(datas[2], true)">展开第三个</el-button>
        <el-button @click="$refs.plTreeTable2.setAllTreeExpansion()">展开全部</el-button>
        <el-button @click="$refs.plTreeTable2.clearTreeExpand()">关闭所有</el-button>
        <el-button @click="getTreeExpansionEvent">获取已展开</el-button>
      </p>
      <u-table
                ref="plTreeTable2"
                fixed-columns-roll
                beautify-table
                header-drag-style
                :height="height"
                :treeConfig="treeConfig"
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
                    v-for="item in columns2"
                    :key="item.id"
                    :prop="item.prop"
                    :label="item.label"
                    :width="item.width"/>
            <u-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="text" @click="addnode(scope.row)" size="small">添加节点</el-button>
                    <el-button type="text" @click="delnode(scope.row)" size="small">删除节点</el-button>
                </template>
            </u-table-column>
        </u-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                num: 0,
                height: 400,
                columns2: Array.from({ length: 3 }, (_, idx) => ({
                    prop: 'address', id: idx, label: '地址' + idx, width: 200
                })),
                treeConfig: { children: 'children',  expandAll: false, hasChildren: 'hasChildren'}
            }
        },
        mounted () {
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
            // 添加节点表格数据
            this.datas = data
            this.$refs.plTreeTable2.reloadData(data)
        },
        methods: {

            // 注意注意： you should read the notes below this method carefully！

            // 再次提醒下面的所有方法等等，都是需要row-id且唯一的。请你重视！

            // 你应该确保的我的id的唯一性，因为你上面设置了row-id为id，如果下面这样去每次push那么ID势必会一直，导致后续问题！
            // 每次点击添加节点，你下面的children应该是有变化的，特别是你表格上绑定的row-id的值！
            addnode (row) {
                this.num++ // 我这个就是为了把我的ID搞成不一样，你可以不学我这样，反正我表格里面只管你的rowId是否唯一！
                let rowId = 'id' // row-id="id"  如同你上面设置的
                // 如果每次添加的数据如下这个注释部分，表格将会后续有问题！
                // [{
                //     id: 7,
                //     date: '7',
                //     name: '王小虎',
                //     address: '上海市普陀区金沙江路 1516 弄'
                // }]
                let children = [{
                    id: row[rowId] + '' + this.num,
                    date: '7',
                    name: '王小虎',
                    address: row[rowId] + '' + this.num
                }]
                // 1.查找节点其实就是一个遍历的过程，遍历到满足条件的节点则返回，遍历完成未找到则返回null。
                // 2.类似数组的find方法，传入一个函数用于判断节点是否符合条件
                // 3. 符合条件就添加节点信息
                let rowNode = this.treeFind(this.datas, this.func, row, rowId, children)
                // console.log(rowNode) // 这是我当前添加节点的row，看看就行

                // 上面treeFind方法难理解吗？你看看这个getTreeItem

                // 获取之前已经展开的
                let eExpand = this.$refs.plTreeTable2.getTreeExpandRecords()
                // 获取之前滚动的位置
                let scrollTop = this.$refs.plTreeTable2.tableExample().scrollTop
                // 添加完数据了，你可能需要重新载入数据
                this.$refs.plTreeTable2.reloadData(this.datas).then(() => {
                    // 获取之前已经展开的
                    // 在你重新reloadData后，因为是虚拟表格，树结构是不存在的，只有同级的概念，你看见的树其实是算法算出来的！
                    // 所以在你重新赋值数据，你可能需要重新展开之前展开过的，且 this.$refs.plTreeTable2.getTreeExpandRecords()方法
                    // 需要在reloadData方法之前调用，然后把之前展开的用变量保存起来！
                    // 遍历吧之前的展开回去
                    eExpand.forEach(row => {
                        this.$refs.plTreeTable2.setTreeExpansion(row, true)
                    })
                    // 如果你添加完了，需要展开当前添加的节点，上面是展开之前展开过的，这个是展开当前添加的，是不一样的概念
                    this.$refs.plTreeTable2.setTreeExpansion(rowNode, true)
                    // 如果不调用滚动到之前的表格位置，那么你会感觉到当你重新赋值数据的时候，会滚动到顶部!
                    // 如果这里直接传scrollTop会给你感觉效果不太舒服，因为你节点添加了感觉看不见，因为你的表格高度高了点。
                    // 你可以吧scrollTop加上你新增的一个行高，行高多少你比我清楚吧，row-height
                    // 注意树表格改变数据源滚动条滚动到顶部，你设置dataChangesScrollTop为false是一样滚动到顶部的，所以你还是用下面的方式滚动回去吧！
                    this.$refs.plTreeTable2.pagingScrollTopLeft(scrollTop + 60)
                    // 好了是不是感觉虚拟树表格添加节点很简单啦？嘻嘻嘻！其实我并没有改表格代码，
                    // 对于这样的功能都可以自己结合表格的方法自行实现！其实ux的树实现道理也是类似的！
                })
            },
            // tree就是数据源表格的数据，
            treeFind (tree, func, row, rowId, children) {
                for (const data of tree) {
                    // 这个意思就是如果存在当前节点就返回当前的row
                    if (func(data, row, rowId, children)) return data
                    // 如果不存在，且存在children子节点就继续遍历
                    if (data[this.treeConfig.children]) {
                        // 下面这样写是错误的。除非你知道你子节点key值属性名是'children'，不然请根据你的配置表来
                        // const res = this.treeFind(data.children, func, row, rowId, children)
                        // 你得这样写
                        const res = this.treeFind(data[this.treeConfig.children], func, row, rowId, children)
                        // 如果执行返回了，就直接返回
                        if (res) return res
                    }
                }
                return null
            },
            func (data, row, rowId, children) {
                // data就是tree表格数据源的row, 如果跟你点击添加节点的row的roeId一样，你就把你需要添加的数据放到他节点下面！
                if (data[rowId] === row[rowId]) {
                    // 如果存在子节点children就直接push
                    if (data[this.treeConfig.children]) {
                        data[this.treeConfig.children].push(...children)
                    } else {
                        // 如果不存在子节点，就直接创建子节点
                        data[this.treeConfig.children] = children
                    }
                    return true
                }
                return false
            },
            // 添加节点方法二
            getTreeItem (data, row, rowId, children) {
                data.map(item => {
                    if (item[rowId] === row[rowId]) {
                        // 如果存在子节点children就直接push
                        if (item[this.treeConfig.children]) {
                            item[this.treeConfig.children].push(...children)
                        } else {
                            // 如果不存在子节点，就直接创建子节点
                            item[this.treeConfig.children] = children
                        }
                    } else {
                        if (item.children) {
                            this.getTreeItem(item.children, row, rowId, children);
                        }
                    }
                });
            },

            // 删除节点
            delnode (row) {
                let rowId = 'id' // row-id="id"  如同你上面设置的
                this.datas = this.filterNode(this.datas, row, rowId)
                // 获取之前已经展开的
                let eExpand = this.$refs.plTreeTable2.getTreeExpandRecords()
                // 获取之前滚动的位置
                let scrollTop = this.$refs.plTreeTable2.tableExample().scrollTop
                // 删除完数据了，你可能需要重新载入数据
                this.$refs.plTreeTable2.reloadData(this.datas).then(() => {
                    // 获取之前已经展开的
                    // 在你重新reloadData后，因为是虚拟表格，树结构是不存在的，只有同级的概念，你看见的树其实是算法算出来的！
                    // 所以在你重新赋值数据，你可能需要重新展开之前展开过的，且 this.$refs.plTreeTable2.getTreeExpandRecords()方法
                    // 需要在reloadData方法之前调用，然后把之前展开的用变量保存起来！
                    // 遍历吧之前的展开回去
                    eExpand.forEach(row => {
                        this.$refs.plTreeTable2.setTreeExpansion(row, true)
                    })
                    // 如果不调用滚动到之前的表格位置，那么你会感觉到当你重新赋值数据的时候，会滚动到顶部!
                    // 注意树表格改变数据源滚动条滚动到顶部，你设置dataChangesScrollTop为false是一样滚动到顶部的，所以你还是用下面的方式滚动回去吧！
                    this.$refs.plTreeTable2.pagingScrollTopLeft(scrollTop)
                    // 好了是不是感觉虚拟树表格删除节点很简单啦？嘻嘻嘻！其实我并没有改表格代码，
                    // 对于这样的功能都可以自己结合表格的方法自行实现！其实ux的树实现道理也是类似的！
                })
            },
            filterNode (data, row, rowId) {
                let newData = data.filter(x => x[rowId] !== row[rowId])
                newData.forEach(x => x.children && (x.children = this.filterNode(x.children, row, rowId)))
                return newData
            },
            // 获取已经展开的节点
            getTreeExpansionEvent () {
              console.log(this.$refs.plTreeTable2.getTreeExpandRecords())
            },
        }
    }
</script>

<style scoped>

</style>
