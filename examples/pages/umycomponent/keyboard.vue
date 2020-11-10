<template>
    <div>
        <h3>键盘导航</h3>
        <p>设置 mouse-config={selected: true} 启用单元格选中功能（只能用于 edit-config={mode: 'cell' } 有效）</p>
        <p>设置 keyboard-config={isArrow: true, isDel: true, isEnter: true, isTab: true, isEdit: true} 启用按键功能及任意键编辑功能，方向键、回车键、Tab 键、Esc 键、F2 键、Del、Back 键</p>
        <p>通过事件edit-currently-active可以获取到当前激活的单元格</p>
        <p>注：当你选中了单元格，然后你按下任意键就可以获取焦点进行编辑,除了功能键，默认直接清空内容</p>
        <p>注：当输入框是编辑状态，可以通过tab按键来切换单元格，不可以使用上下左右按钮来切换单元格，因为此时是编辑状态</p>
        <p>注：当不是编辑状态，你可以通过上下左右按钮来切换单元格</p>
        <p>注：当输入框是编辑状态，你可以使用失去焦点或者按下esc按键退出编辑状态</p>
        <p>注：下面纯属示例写了2列，你可以多列，可以多行</p>
        <p>注：不喜欢那个单元格选中的边框线，自己去改样式，直接修改 .elx-table .elx-body--column.col--selected:not(.col--checked) 这个路径的样式自己去覆盖</p>
       <p><a href="https://github.com/u-leo/umy-ui/blob/master/examples/pages/umycomponent/keyboard.vue" target="_blank">点击查看当前demo页面的代码</a></p>
      <ux-grid border
                 show-overflow
                 ref="plxTable"
                 keep-source
                 height="500"
                 :data="tableData"
                 :highlightCurrentRow="false"
                 :mouse-config="{selected: true}"
                 :keyboard-config="{isArrow: true, isDel: true, isEnter: true, isTab: true, isEdit: true}"
                 @edit-currently-active="editCurrentlyActive"
                 :edit-config="{trigger: 'click', mode: 'cell'}">
            <ux-table-column type="checkbox" width="60"></ux-table-column>
            <!--autofocus，如果是自定义渲染可以指定聚焦的选择器，他的作用很明显就是你点击一下就帮你去获取焦点。
            你无需点击第二次再去获取焦点。autofocus的值就是你编辑型输入框（edit）组件的类名-->
            <ux-table-column field="name" title="名字" width="140" :edit-render="{autofocus: '.el-input__inner'}">
                <template v-slot:edit="scope">
                    <!--autofocus绑定的类名就是这个组件的class类名。帮助获取输入框焦点-->
                    <el-input v-model="scope.row.name"></el-input>
                </template>
                <!--写非编辑状态下的样式, 看最底部的style样式部分吧 有写my-input-sc样式哦-->
                <template v-slot="scope">
                    <span class="my-input-sc">{{ scope.row.name }}</span>
                </template>
            </ux-table-column>
            <ux-table-column field="age" title="年龄" :edit-render="{autofocus: '.el-input__inner'}">
                <template v-slot:edit="{ row }">
                    <el-input
                            v-model="row.age"
                            type="number"
                            placeholder="请输入内容"
                            style="width: 100%"></el-input>
                </template>
                <!--写非编辑状态下的样式, 看最底部的style样式部分吧 有写my-input-sc样式哦-->
                <template v-slot="scope">
                    <span class="my-input-sc">{{ scope.row.age }}</span>
                </template>
            </ux-table-column>
        </ux-grid>
        <div style="margin-top: 20px">
           <p> keyboard-config 按键配置：</p>
            <p>   ArrowUp  （isArrow）如果存在，则移动到上面的单元格 </p>
            <p> Shift + ArrowUp  （isArrow）如果存在，则往上面延伸单元格区域 </p>
            <p> ArrowDown  （isArrow）如果存在，则移动到下面的单元格 </p>
            <p>  Shift + ArrowDown  （isArrow）如果存在，则往下面延伸单元格区域 </p>
            <p>  ArrowLeft  （isArrow）如果存在，则移动到左边的单元格 </p>
            <p>  Shift + ArrowLeft  （isArrow）如果存在，则往左边延伸单元格区域 </p>
            <p>  ArrowRight  （isArrow）如果存在，则移动到右边的单元格 </p>
            <p>  Shift + ArrowRight  （isArrow）如果存在，则往右边延伸单元格区域 </p>
            <p>  Tab  （isTab）如果存在，则移动到右边单元格；如果存在区域，则在指定区域内移动；如果移动到最后一列，则从下一行开始移到，以此循环 </p>
            <p>  Tab + Shift  （isTab）如果存在，则移动到左边单元格，则在指定区域内移动；如果移动到第一列，则从上一行开始移到，以此循环 </p>
            <p>  Enter  （isEnter）如果存在，取消单元格编辑并移动到下面的单元格，则在指定区域内移动；如果移动到最后一行，则从下一列开始移到，以此循环 </p>
            <p> Enter + Shift  （isEnter）如果存在，取消单元格编辑并移动到上面的单元格，则在指定区域内移动；如果移动到第一行，则从上一列开始移到，以此循环 </p>
            <p>  Escape  如果存在，取消单元格编辑状态 </p>
            <p> Delete  （isDel）清空单元格内容 </p>
            <p> Backspace  （isDel）清空单元格内容并激活为编辑状态 </p>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                tableData: []
            }
        },
        mounted () {
            // 延迟加载
            this.tableData = Array.from({ length: 10 }, (_, idx) => ({
                id: idx + 1,
                date: '2016-05-03',
                name: '张三' + idx,
                sex: 'nan',
                age: 18 + idx
            }))
        },
        methods: {
            editCurrentlyActive ({row, column, cell}) {
                console.log({row, column, cell})
            }
        }
    }
</script>

<style scoped lang="scss">
    .my-input-sc {
        display: inline-block;
        height: $default-height;
        line-height: 30px;
        -webkit-appearance: none;
        background-color: #FFFFFF;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #DCDFE6;
        box-sizing: border-box;
        color: #606266;
        font-size: inherit;
        outline: none;
        padding: 0 15px;
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        width: 100%;
    }
</style>
