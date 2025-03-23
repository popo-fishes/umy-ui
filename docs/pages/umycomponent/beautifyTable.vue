<template>
  <div>
    <h3>美化表格(变好看一点)</h3>
    <p>使用inverse-current-row ? 必须开启highlight-current-row: 是否需要反选高亮当前行（当点击行默认为选中，必须点击其他行才能取消选中，这是element的原则，所以我改变了它。那么是否需要点击行选中，再次点击当前选中行就取消呢，请设置这个属性吧）</p>
    <p>当`u-table`元素中注入`data`对象数组后，开启beautifyTable属性，开启 header-drag-style（这个主要是让拖动列的线变化），表格会变好看点啦。</p>
    <p>在列上写上borderLine为false那么代表当前列不显示拖动的图标，然后你还可以加上resizable为false表示不可以拖动，这样就可以让最后一列不可拖动！</p>
    <u-table
      :data="tableData"
      beautifyTable
      highlight-current-row
      inverse-current-row
      header-drag-style
      :border="true">
      <u-table-column
        prop="name"
        label="名字"
        width="180">
      </u-table-column>
      <u-table-column
        prop="sex"
        label="性别"
        width="180">
      </u-table-column>
      <u-table-column
        prop="age"
        :borderLine="false"
        :resizable="false"
        label="年龄">
      </u-table-column>
    </u-table>
    <p>ux-grid的美化</p>
    <ux-grid
          :data="tableData"
          ref="plxTree"
          beautifyTable
          height="300"
          :checkbox-config="{highlight: true}">
      <ux-table-column type="checkbox" width="50" resizable fixed="left"></ux-table-column>
      <ux-table-column field="name" resizable title="Name" width="200"></ux-table-column>
      <ux-table-column field="size" resizable title="Size" width="200"></ux-table-column>
      <ux-table-column field="type" resizable title="Type" width="200"></ux-table-column>
      <ux-table-column field="date" resizable title="Date" width="200"></ux-table-column>
      <ux-table-column field="name" title="Name"></ux-table-column>
  </ux-grid>
    <div v-html="md" style="margin-top: 30px" class="width100"></div>
  </div>
</template>

<script>
  import md2 from '../../components/u-table-component/basicTableUsage/beautifyTable.md'
  export default {
    computed: {
      md () {
        return md2
      }
    },
    data() {
      return {
        tableData: [{
          sex: '男',
          name: '王小虎',
          age: '15'
        }, {
          sex: '女',
          name: '王小明',
          age: '15'
        }, {
          sex: '女',
          name: '王小丽',
          age: '15'
        }, {
          sex: '未知',
          name: '王小狗',
          age: '15'
        }]
      }
    }
  }
</script>
