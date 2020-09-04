<template>
  <div>
    <h3>全部显示，（请认真读完下面的6点）</h3>
    <p>
      1.致力于很多小伙伴说，我们的客户就需要输入框直接展示出来的感觉。那么作者在这里给你一个满意的答卷！
    </p>
    <p>
      2.首先我们知道编辑型表格不能直接全部显示出来，因为这样初次渲染节点很多，会卡。所以如果我们想表格看上去全部都是输入框的感觉，得通过障眼法来做
    </p>
    <p>
      3.我们还是通过点击单元格触发编辑。但是我们可以通过自定义非编辑状态下个样子，这样就可以吧非编辑状态下的渲染标签改成输入框的那种假输入框感觉。
    </p>
    <p>
      4.autofocus非常重要的东西，你不绑定它，给你的感觉就是我点击障眼法的单元格了，但是输入框没有获取焦点。因为我们上面提到了。我们是障眼法的方式。点击了才渲染输入框。那么此时输入框并没有获取焦点。这个东西就是帮助我们去获取焦点。让别人感觉我是个真的输入框
    </p>
    <p>
      5.下面只给出了2列的示例，自己实际场景自己添加列都行！自己去定义其他不是输入框组件的样式！纯属示例！
    </p>
    <p>
      6.你可以对比下，“名字”这一列加了autofocus的感觉。  在试试看 “年龄”这一列没有加上autofocus的感觉。你不难发现你点击年龄输入框需要点击2次才能获取焦点！
    </p>
    <ux-grid border
             show-overflow
             ref="plxTable"
             keep-source
             height="500"
             :data="tableData"
             :highlightCurrentRow="false"
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
      <ux-table-column field="age" title="年龄"  edit-render>
        <template v-slot:edit="{ row }">
          <el-input
            v-model="row.age"
            type="number"
            placeholder="请输入内容"
            @input="updateFooterEvent(row.age)"
            style="width: 100%"></el-input>
        </template>
        <!--写非编辑状态下的样式, 看最底部的style样式部分吧 有写my-input-sc样式哦-->
        <template v-slot="scope">
          <span class="my-input-sc">{{ scope.row.age }}</span>
        </template>
      </ux-table-column>
    </ux-grid>
    <div v-html="md" style="margin-top: 30px" class="width100"></div>
  </div>
</template>

<script>
  import md2 from '../../components/u-table-component/editTypeTbalePage/showAll.md'
  export default {
    computed: {
      md () {
        return md2
      }
    },
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
    }
  }
</script>

<style>
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
