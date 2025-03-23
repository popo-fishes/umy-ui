<template>
    <div>
        <h3>筛选高级用法</h3>
        <p>筛选高级用法、动态更改筛选条件，通过调用 setFilter 和 updateData 方法来处理复杂场景的筛选逻辑（具体请自行实现，该示例仅供参考）</p>
        <p><a href="https://github.com/u-leo/umy-ui/blob/master/examples/pages/umycomponent/screeningAdvanced.vue" target="_blank">点击查看当前demo页面的代码</a></p>
        <p>
             <el-button @click="filternumEvent">筛选 num</el-button>
             <el-button @click="updatenumFilterEvent">更改 num 的筛选条件</el-button>
             <el-button @click="$refs.plxTable.clearFilter($refs.plxTable.getColumnByField('num'))">清除 num 的筛选条件</el-button>
             <el-button @click="$refs.plxTable.clearFilter()">清除所有的筛选条件</el-button>
             <el-button @click="$refs.plxTable.clearSort()">清空排序</el-button>
         </p>
        <ux-grid
                ref="plxTable"
                :height="height"
                :sortConfig="{trigger: 'cell'}"
                show-header-overflow="ellipsis">
            <ux-table-column type="index" width="100"/>
            <ux-table-column field="num"
                             title="num"
                             sortable
                             :filters="[{ label: '大于10', value: 10 }, { label: '大于20', value: 20 }]"
                             :filter-method="filternumMethod"/>
            <ux-table-column
                    v-for="item in columns"
                    :key="item.id"
                    :resizable="item.resizable"
                    :field="item.prop"
                    :title="item.label"
                    :sortable="item.sortable"
                    :width="item.width"
                    :fixed="item.fixed"/>
        </ux-grid>
    </div>
</template>

<script>
    export default {
        name: "screeningAdvanced",
        data () {
            return {
                height: 0,
                columns: [],
            }
        },
        mounted () {
            this.height = 500 // 动态设置高度
            // 异步设置数据，这样解决初次进来不卡，由于加载数据很大啦，你没必要这样做哦
            setTimeout(() => {
                let col = ['name', 'sex', 'describe']
                this.columns = Array.from({ length: 4 }, (_, idx) => ({
                    prop: idx > 2 ? col[2] : col[idx],
                    id: idx,
                    label: idx > 2 ? col[2] : col[idx],
                    fixed: idx < 1 ? '' : '',
                    width: this.rnd(50, 300),
                    sortable: false,
                    resizable: true
                }))
                const data = Array.from({ length: 100 }, (_, idx) => ({
                    id: idx + 1,
                    name: 1 + idx,
                    sex: idx,
                    num: 1 + idx,
                    describe: '欢迎使用plx' + idx
                }))
                this.datas = data // 知道为啥datas不在 data()方法里面定义吗？嘻嘻
                this.$refs.plxTable.reloadData(this.datas)
            })
        },
        methods: {
            rnd(n, m){
                var random = Math.floor(Math.random()*(m-n+1)+n);
                return random;
            },
            filternumMethod ({ value, row, column }) {
                return parseInt(row.num) > value
            },
            filternumEvent () {
                const column = this.$refs.plxTable.getColumnByField('num')
                // 修改第二个选项为勾选状态
                const option = column.filters[1]
                option.checked = true
                // 修改条件之后，需要手动调用 updateData 处理表格数据
                this.$refs.plxTable.updateData()
            },
            // 更改 num 的筛选条件
            updatenumFilterEvent () {
                // 这是我根据 num 的field字段去找出列，你也可以直接获取列，然后找出你要修改的列，
                // 反正setFilter方法接受一个列，加上要修改的筛选值数组
                const column = this.$refs.plxTable.getColumnByField('num')
                // 修改筛选列表，并默认设置为选中状态
                this.$refs.plxTable.setFilter(column, [
                    { label: '大于15', value: 15},
                    { label: '大于30', value: 30, checked: true },
                    { label: '大于40', value: 40 },
                ])
                // 修改条件之后，需要手动调用 updateData 处理表格数据
                this.$refs.plxTable.updateData()
            }
        }
    }
</script>

<style scoped>

</style>
