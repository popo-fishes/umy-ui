<template>
    <div>
        <h3>自定义列头排序</h3>
        <p>自定义列头排序的实现，你可以把表格封装成子组件进行定制，通过 slot 就可以实现自定义排序</p>
        <p>如果你不需要自定义那个头部，然后想点击单元格就排序呢，你可以配置sortConfig{trigger: 'cell'}</p>
        <p>sortConfig{orders: ['asc', 'desc']}自定义轮转顺序 string[],  默认值是：['asc', 'desc', 'null']，你可以自定义哦 如['asc', 'desc']</p>
       <p><a href="https://github.com/u-leo/umy-ui/blob/master/examples/pages/umycomponent/customColumnHeaderSort.vue" target="_blank">点击查看当前demo页面的代码</a></p>
      <ux-grid
                ref="plxTable"
                :height="height"
                :sortConfig="{trigger: 'cell', orders: ['asc', 'desc', 'null']}"
                show-header-overflow="ellipsis">
            <ux-table-column type="index" width="100"/>
            <ux-table-column field="num" title="num" sortable>
                <template v-slot:header="{ column }">
                    <span>{{ column.title }}</span>
                    <span :class="{'is-order': column.order}">
                     {{ column.order }}
                   </span>
                </template>
            </ux-table-column>
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

        <h3>还有一种呢就是自定义排序，自己调用sort方法，下面给个示例</h3>
        <p>通过设置showIcon可以去掉内置排序图标</p>
        <p>然后通过点事件进行排序</p>
        <ux-grid
                ref="plxTable2"
                :height="height"
                :sortConfig="{showIcon: false}"
                show-header-overflow="ellipsis">
            <ux-table-column type="index" width="100"/>
            <ux-table-column field="num" title="num" sortable>
                <template v-slot:header="{ column }">
                    <p @click="numSort(column)">
                     <span>{{ column.title }}</span>
                        <span :class="{'is-order': column.order}">
                       {{ column.order }} 点我头部可以排序哦
                     </span>
                    </p>
                </template>
            </ux-table-column>
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
        name: "customColumnHeaderSort",
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
                    sortable: idx === 1,
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
                this.$refs.plxTable2.reloadData(this.datas)
            })
        },
        methods: {
            rnd(n, m){
                var random = Math.floor(Math.random()*(m-n+1)+n);
                return random;
            },
            numSort (column) {
                if (column.order === 'desc') {
                    this.$refs.plxTable2.clearSort()
                } else if (column.order === 'asc') {
                    this.$refs.plxTable2.sort(column.property, 'desc')
                } else {
                    this.$refs.plxTable2.sort(column.property, 'asc')
                }
            }
        }
    }
</script>

<style scoped>

</style>
