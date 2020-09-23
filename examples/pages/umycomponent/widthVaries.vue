<template>
    <div>
        <h3>宽度不一样的虚拟表格！</h3>
        <p>widthResize这个属性，可以监听父元素的变化，进行重绘哦！</p>
        <p><a href="https://github.com/u-leo/umy-ui/blob/master/examples/pages/umycomponent/widthVaries.vue" target="_blank">点击查看当前demo页面的代码</a></p>
        <ux-grid
                ref="plxTable"
                :height="height"
                widthResize
                show-overflow="tooltip"
                :checkboxConfig="{checkMethod: selectable, highlight: true}"
                @table-body-scroll="scroll"
                show-header-overflow="ellipsis">
            <ux-table-column type="checkbox" width="80"/>
            <ux-table-column type="index" width="80"/>
            <ux-table-column
                    v-for="item in columns"
                    :key="item.id"
                    :resizable="item.resizable"
                    :field="item.prop"
                    :title="item.label"
                    :sortable="item.sortable"
                    :width="item.width"
                    :fixed="item.fixed"/>
            <ux-table-column title="额外信息" width="60" fixed="right" field="describe"></ux-table-column>
        </ux-grid>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                height: 0,
                columns: []
            }
        },
        mounted () {
            this.height = 500 // 动态设置高度
            // 异步设置数据，这样解决初次进来不卡，由于加载数据很大啦，你没必要这样做哦
            setTimeout(() => {
                this.columns =  [
                    { prop: "column0", width: 80, label: "AAA" },
                    { prop: "column0", width: 336, label: "AAA" },
                    { prop: "column0", width: 336, label: "AAA" },
                    { prop: "column0", width: 96, label: "AAA" },
                    { prop: "column0", width: 96, label: "AAA" },
                    { prop: "column0", width: 108, label: "AAA" },
                    { prop: "column0", width: 90, label: "AAA" },
                    { prop: "column0", width: 90, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 480, label: "AAA" },
                    { prop: "column0", width: 108, label: "AAA" },
                    { prop: "column0", width: 108, label: "AAA" },
                    { prop: "column0", width: 96, label: "AAA" },
                    { prop: "column0", width: 113, label: "AAA" },
                    { prop: "column0", width: 138, label: "AAA" },
                    { prop: "column0", width: 60, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 96, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 60, label: "AAA" },
                    { prop: "column0", width: 71, label: "AAA" },
                    { prop: "column0", width: 60, label: "AAA" },
                    { prop: "column0", width: 71, label: "AAA" },
                    { prop: "column0", width: 60, label: "AAA" },
                    { prop: "column0", width: 96, label: "AAA" },
                    { prop: "column0", width: 96, label: "AAA" },
                    { prop: "column0", width: 96, label: "AAA" },
                    { prop: "column0", width: 326, label: "AAA" },
                    { prop: "column0", width: 192, label: "AAA" },
                    { prop: "column0", width: 228, label: "AAA" },
                    { prop: "column0", width: 79, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 180, label: "AAA" },
                    { prop: "column0", width: 216, label: "AAA" },
                    { prop: "column0", width: 180, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 60, label: "AAA" },
                    { prop: "column0", width: 96, label: "AAA" },
                    { prop: "column0", width: 96, label: "AAA" },
                    { prop: "column0", width: 96, label: "AAA" },
                    { prop: "column0", width: 326, label: "AAA" },
                    { prop: "column0", width: 192, label: "AAA" },
                    { prop: "column0", width: 228, label: "AAA" },
                    { prop: "column0", width: 79, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 180, label: "AAA" },
                    { prop: "column0", width: 216, label: "AAA" },
                    { prop: "column0", width: 180, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 60, label: "AAA" },
                    { prop: "column0", width: 96, label: "AAA" },
                    { prop: "column0", width: 96, label: "AAA" },
                    { prop: "column0", width: 96, label: "AAA" },
                    { prop: "column0", width: 326, label: "AAA" },
                    { prop: "column0", width: 192, label: "AAA" },
                    { prop: "column0", width: 228, label: "AAA" },
                    { prop: "column0", width: 79, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 180, label: "AAA" },
                    { prop: "column0", width: 216, label: "AAA" },
                    { prop: "column0", width: 180, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 180, label: "AAA" },
                    { prop: "column0", width: 216, label: "AAA" },
                    { prop: "column0", width: 180, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 180, label: "AAA" },
                    { prop: "column0", width: 216, label: "AAA" },
                    { prop: "column0", width: 180, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 180, label: "AAA" },
                    { prop: "column0", width: 216, label: "AAA" },
                    { prop: "column0", width: 180, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                    { prop: "column0", width: 180, label: "AAA" },
                    { prop: "column0", width: 216, label: "AAA" },
                    { prop: "column0", width: 180, label: "AAA" },
                    { prop: "column0", width: 84, label: "AAA" },
                ]
                const data = Array.from({ length: 5000 }, (_, idx) => ({
                    id: idx + 1,
                    name: 'pl' + idx,
                    describe: idx,
                    column0: '欢迎使用plx' + idx
                }))
                this.datas = data // 知道为啥datas不在 data()方法里面定义吗？嘻嘻
                this.$refs.plxTable.reloadData(this.datas)
            })
        },
        methods: {
            scroll ({scrollTop, scrollLeft}) {
                this.scrollTop = scrollTop
            },
            selectable ({row}) {
                return row.id !== 2
            }
        }
    }
</script>
