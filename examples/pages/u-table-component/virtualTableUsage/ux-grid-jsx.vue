<template>
   <div>
       <h3>jsx自定义模板</h3>
       <ux-grid border show-overflow ref="plxTable" height="400" :columns="tableColumn"></ux-grid>
       <pre>
            <code>{{ demo[0] }}</code>
            <code>{{ demo[1] }}</code>
        </pre>
   </div>
</template>

<script>
    export default {
        name: "ux-grid-jsx",
        data () {
            return {
                tableColumn: [
                    {
                        field: 'name',
                        width: 100,
                        title: '姓名',
                        slots: {
                            default: ({ row, column }) => {
                                return [
                                    <span style="color: red;">{ row.name }</span>,
                                    <span style="color: red;">-->>哈哈</span>
                                ]
                            }
                        }
                    },
                    {
                        field: 'sex',
                        title: '性别',
                        slots: {
                            // 自定义内容
                            default: ({ row, column }) => {
                                // 不能这样写
                                //  return row.sex > 5 ? "太监" : <span>{ row.sex }</span>
                                // 你得这样写
                                return row.sex < 5 ? "太监" : [<span>{ row.sex }</span>]
                            },
                            // 自定义头部
                            header: ({ column }) => {
                                return [
                                    <p>我还自定义了你?<span style="color: red;">{ column.title }</span></p>
                              ]
                            },
                            // 还可以自定义的呢？有ux-table-column api里面的Scoped Slot属性对象，自己去看吧！
                        }
                    },
                    {
                        field: 'describe',
                        title: '描述',
                        slots: {
                            default: ({ row, column }) => {
                                return [
                                    <span domPropsInnerHTML={ row.describe }></span>
                                ]
                            }
                        }
                    },
                    {
                        field: 'age',
                        title: '年龄',
                        slots: {
                            default: ({ row }, h) => {
                                // 你还可以返回虚拟dom VNode
                                return [
                                    h('span', {
                                        style: {
                                            color: 'blue'
                                        },
                                        on: {
                                            click: () => this.addressClickEvent(row)
                                        }
                                    }, row.age + '，->>你点我试试！')
                                ]
                            }
                        }
                    },
                ],
                demo: [
                    `<template>
   <div>
       <ux-grid border show-overflow ref="plxTable" height="400" :columns="tableColumn"></ux-grid>
   </div>
</template>`,
                    ` export default {
        name: "ux-grid-jsx",
        data () {
            return {
                tableColumn: [
                    {
                        field: 'name',
                        width: 100,
                        title: '姓名',
                        slots: {
                            default: ({ row, column }) => {
                                return [
                                    <span style="color: red;">{ row.name }</span>,
                                    <span style="color: red;">-->>哈哈</span>
                                ]
                            }
                        }
                    },
                    {
                        field: 'sex',
                        title: '性别',
                        slots: {
                            // 自定义内容
                            default: ({ row, column }) => {
                                // 不能这样写
                                //  return row.sex > 5 ? "太监" : <span>{ row.sex }</span>
                                // 你得这样写
                                return row.sex < 5 ? "太监" : [<span>{ row.sex }</span>]
                            },
                            // 自定义头部
                            header: ({ column }) => {
                                return [
                                    <p>我还自定义了你?<span style="color: red;">{ column.title }</span></p>
                              ]
                            },
                            // 还可以自定义的呢？有ux-table-column api里面的Scoped Slot属性对象，自己去看吧！
                        }
                    },
                    {
                        field: 'describe',
                        title: '描述',
                        slots: {
                            default: ({ row, column }) => {
                                return [
                                    <span domPropsInnerHTML={ row.describe }></span>
                                ]
                            }
                        }
                    },
                    {
                        field: 'age',
                        title: '年龄',
                        slots: {
                            default: ({ row }, h) => {
                                // 你还可以返回虚拟dom VNode
                                return [
                                    h('span', {
                                        style: {
                                            color: 'blue'
                                        },
                                        on: {
                                            click: () => this.addressClickEvent(row)
                                        }
                                    }, row.age + '，->>你点我试试！')
                                ]
                            }
                        }
                    },
                ]
            }
        },
        mounted () {
            const data = Array.from({ length: 1000 }, (_, idx) => ({
                id: idx + 1,
                name: 'pl' + idx,
                sex: idx,
                age: idx,
                describe: '欢迎使用umy' + idx
            }))
            this.datas = data // 知道为啥datas不在 data()方法里面定义吗？嘻嘻
            this.$refs.plxTable.reloadData(this.datas)
        },
        methods: {
            addressClickEvent (row) {
                alert('点我干嘛');
            }
        }
    }`
                ]
            }
        },
        mounted () {
            // 主要是初次进来加载大量数据页面感觉切换卡，搞个延迟。你可以不学我这样做
           setTimeout(() => {
               const data = Array.from({ length: 1000 }, (_, idx) => ({
                   id: idx + 1,
                   name: 'pl' + idx,
                   sex: idx,
                   age: idx,
                   describe: '欢迎使用umy' + idx
               }))
               this.datas = data // 知道为啥datas不在 data()方法里面定义吗？嘻嘻
               this.$refs.plxTable.reloadData(this.datas)
           })
        },
        methods: {
            addressClickEvent (row) {
                alert('点我干嘛');
            }
        }
    }
</script>

<style scoped>

</style>
