<template>
    <div>
        <h3>虚拟表格合并行，合并列</h3>
        <p>你需要使用mergeCells</p>
        <p><a href="https://github.com/u-leo/umy-ui/blob/master/examples/pages/umycomponent/mergeCells.vue" target="_blank">点击查看当前demo页面的代码</a></p>
        <ux-grid
                ref="plxTable"
                :height="height"
                :checkboxConfig="{highlight: true}"
                :merge-cells="mergeCells"
                show-header-overflow="ellipsis">
            <ux-table-column type="checkbox" width="80"/>
            <ux-table-column type="index" width="100"/>
            <ux-table-column
                    v-for="item in columns"
                    :key="item.id"
                    :resizable="item.resizable"
                    :field="item.prop"
                    :title="item.label"
                    :sortable="item.sortable"
                    :width="item.width"
                    :fixed="item.fixed"/>
            <ux-table-column title="额外信息" width="60" field="address"/>
        </ux-grid>
    </div>
</template>

<script>
    export default {
        name: "mergeCells",
        data () {
            return {
                height: 0,
                columns: [],
                mergeCells: [
                    // row第几行，col第几列，rowspan  行合并几行，colspan列合并几列
                    { row: 4, col: 2, rowspan: 2, colspan: 5 },
                    { row: 10, col: 3, rowspan: 3, colspan: 3 },
                    { row: 15, col: 4, rowspan: 5, colspan: 3 }
                ],
            }
        },
        mounted () {
            this.height = 500 // 动态设置高度
            // 异步设置数据，这样解决初次进来不卡，由于加载数据很大啦，你没必要这样做哦
            setTimeout(() => {
                let col = ['name', 'sex', 'describe']
                this.columns = Array.from({ length: 500 }, (_, idx) => ({
                    prop: idx > 2 ? col[2] : col[idx],
                    id: idx,
                    label: idx > 2 ? col[2] : col[idx],
                    fixed: idx < 1 ? '' : '',
                    width: this.rnd(50, 300),
                    sortable: idx === 1,
                    resizable: true
                }))
                const data = Array.from({ length: 5000 }, (_, idx) => ({
                    id: idx + 1,
                    name: 'pl' + idx,
                    sex: idx,
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
        }
    }
</script>
