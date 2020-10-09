<template>
    <div>
        <h3>表格校验</h3>
        <p>1. updateStatus方法非常重要</p>
        <p>2. validate方法 如果你传入一个row，或者rows rows就是多个row的意思， 那么就代表指定某行校验！</p>
        <p><a href="https://github.com/u-leo/umy-ui/blob/master/examples/pages/umycomponent/tableRules.vue" target="_blank">点击查看当前demo页面的代码</a></p>
        <p>
            <el-button @click="insertEvent()">新增一条数据并触发校验</el-button>
            <el-button @click="$refs.plxTable.removeCheckboxRow()">删除选中</el-button>
            <el-button @click="validAllEvent">整个表格校验</el-button>
            <el-button @click="fullValidEvent">校验</el-button>
            <el-button @click="submitEvents">提交表格数据</el-button>
        </p>
        <ux-grid border
                 show-overflow
                 ref="plxTable"
                 keep-source
                 :validConfig="{autoPos: true}"
                 :rules="rules"
                 :max-height="400"
                 :data="tableData"
                 :highlightCurrentRow="false"
                 :edit-config="{trigger: 'click', mode: 'row'}">
            <ux-table-column type="checkbox" width="80"></ux-table-column>
            <ux-table-column type="index" width="80"></ux-table-column>
            <ux-table-column field="name" title="名字" width="140" :edit-render="{autofocus: '.el-input__inner'}">
                <template v-slot:edit="scope">
                    <el-input v-model="scope.row.name" @input="$refs.plxTable.updateStatus(scope)"></el-input>
                </template>
            </ux-table-column>
            <ux-table-column field="age" title="年龄"  width="160" :edit-render="{autofocus: '.el-input__inner'}">
                <template v-slot:header="{ column }">
                    <span>{{ column.title }}</span>
                </template>
                <template v-slot:edit="scope">
                    <el-input
                            v-model="scope.row.age"
                            type="number"
                            @input="$refs.plxTable.updateStatus(scope)"
                            placeholder="请输入内容"
                            style="width: 100%"></el-input>
                </template>
            </ux-table-column>
            <ux-table-column field="sex" title="性别" min-width="140" :edit-render="{autofocus: '.el-input__inner'}">
                <template v-slot:edit="scope">
                    <el-select v-model="scope.row.sex" @change="$refs.plxTable.updateStatus(scope)">
                        <el-option v-for="item in sexList" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </template>
                <template v-slot="{ row }">{{ getLabel(row.sex) }}</template>
            </ux-table-column>
        </ux-grid>
    </div>
</template>
<script>
    export default {
        name: "tableRules",
        data () {
            const nameRules = ({ cellValue, rule }) => {
                if (!cellValue) {
                    return new Error('名字必填')
                 } else if (cellValue.length < 2) {
                    return new Error('名字必须大于2个字符')
                }
            }
            return {
                tableData: [],
                sexList: [
                    { value: 'nan',label: '男' },
                    { value: 'nv',label: '女'},
                    { value: 'weizhi',label: '未知'}
                ],
                rules: {
                    name: [
                        { required: true, validator: nameRules}
                    ],
                    age: [
                        { required: true, message: '年龄必填'}
                    ]
                }
            }
        },
        mounted () {
            this.tableData = Array.from({ length: 3 }, (_, idx) => ({
                id: idx + 1,
                date: '2016-05-03',
                name: '张',
                sex: 'nan',
                age: 18 + idx
            }))
        },
        methods: {
            // 转换男女
            getLabel (val) {
                const item = this.sexList.filter(item => item['value'] === val)[0]
                return item ? item.label : ''
            },
            // 校验
            fullValidEvent () {
                // fullValidate完整校验，和 validate 的区别就是会给每一行进行校验
                this.$refs.plxTable.fullValidate().then(data=> {
                    // data就是当前检验不通过的
                    if (data) {
                        let masStr = ''
                        Object.values(data).forEach(errList => {
                            console.log(errList)
                            errList.forEach(params => {
                                let { rowIndex, column, rules } = params
                                rules.forEach(rule => {
                                    masStr += `第 ${rowIndex} 行 ${column.title} 校验错误：${rule.message}; ; ;`
                                })
                            })
                        })
                        // 我用的提示是element-ui的，不要说你没安装element，就说为啥报错
                        this.$notify.error({
                            title: '错误',
                            message: masStr,
                            duration: 5000
                        });
                    } else {
                        // 我用的提示是element-ui的，不要说你没安装element，就说为啥报错
                        this.$message({
                            message: '校验成功',
                            type: 'success',
                            duration: '1000'
                        })
                    }
                })
            },
            // 整个表格校验
            validAllEvent () {
                // 1. validate方法 如果你传入一个true， 那么就代表整个表格校验！
                // 2.快速校验，如果存在校验不通过的行，则返回不再继续校验
                this.$refs.plxTable.validate(true).then(data => {
                    if (data) {
                        this.$message({
                            message: '校验不通过',
                            type: 'error',
                            duration: '1000'
                        })
                    } else {
                        this.$message({
                            message: '校验成功',
                            type: 'success',
                            duration: '1000'
                        })
                    }
                })
            },
            // 插入校验
            async insertEvent () {
                const { row: newRow } = await this.$refs.plxTable.insertRow()
                // 插入一条数据并触发校验
                // 如果你传入一个row，或者rows rows就是多个row的意思， 那么就代表指定某行校验！
                this.$refs.plxTable.validate(newRow).then(data => {
                    if (data) {
                    }
                    console.log(data)
                })
            },
            // 提交表格数据
            submitEvents () {
              // 获取当前表格的数据（完整的全量表体数据、处理条件之后的全量表体数据、当前渲染中的表体数据、当前渲染中的表尾数据）
              // {fullData, visibleData, tableData, footerData}
              console.log(this.$refs.plxTable.getTableData())
            }
        }
    }
</script>
