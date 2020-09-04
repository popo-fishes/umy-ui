<template>
  <div>
    <h3>多标签切换</h3>
    <p>1.Tab 页签切换（如果需要将表格放到隐藏的元素中，那么就必然会导致宽度无法计算）滚动条，没法保持之前的滚动距离呢。</p>
    <p>2.解决办法, 在每次切换的时候调用一次doLayout方法。如下就是我去监听radio1的变化。然后调用了doLayout方法</p>
    <div>
      <p style="margin: 20px 0;">
        <el-radio-group v-model="radio1" @change="tabchange">
          <el-radio-button label="tab1">tab1</el-radio-button>
          <el-radio-button label="tab2">tab2</el-radio-button>
          <el-radio-button label="tab3">tab3</el-radio-button>
        </el-radio-group>
      </p>
      <div v-show="radio1 === 'tab1'">
        <u-table
          ref="plTableTab1"
          :data="tableData"
          :height="300"
          use-virtual
          showBodyOverflow="title"
          showHeaderOverflow="title"
          border>
          <u-table-column type="index" width="100" fixed/>
          <u-table-column
            v-for="item in columns"
            :key="item.id"
            :resizable="item.resizable"
            :show-overflow-tooltip="item.showOverflow"
            :prop="item.prop"
            :label="item.label"
            :fixed="item.fixed"
            :width="item.width"/>
        </u-table>
      </div>
      <div v-show="radio1 === 'tab2'">
        <u-table
          ref="plTableTab2"
          :data="tableData"
          :height="300"
          use-virtual
          showBodyOverflow="title"
          showHeaderOverflow="title"
          border>
          <u-table-column type="selection" width="60"></u-table-column>
          <u-table-column
            v-for="item in columns"
            :key="item.id"
            :resizable="item.resizable"
            :show-overflow-tooltip="item.showOverflow"
            :prop="item.prop"
            :label="item.label"
            :fixed="item.fixed"
            :width="item.width"/>
        </u-table>
      </div>
      <div v-show="radio1 === 'tab3'">
        <ux-grid
          ref="plTableTab3"
          :data="tableData"
          :height="300"
          showBodyOverflow="title"
          showHeaderOverflow="title"
          border>
          <ux-table-column
            v-for="item in columns"
            :key="item.id"
            :resizable="item.resizable"
            :show-overflow="item.showOverflow"
            :field="item.prop"
            :title="item.label"
            :fixed="item.fixed"
            :width="item.width"/>
        </ux-grid>
      </div>
    </div>
    <div v-html="md" style="margin-top: 30px" class="width100"></div>
  </div>
</template>

<script>
  import md2 from '../../components/u-table-component/virtualTableUsage/multi-label-switching.md'
  export default {
    computed: {
      md () {
        return md2
      }
    },
    data() {
      return {
        radio1: 'tab1',
        columns: Array.from({ length: 10 }, (_, idx) => ({
          prop: 'address', id: idx, label: '地址地址地址地址地址地址地址地址地址地址地址' + idx, width: 200
        })),
        tableData: Array.from({ length: 500 }, (_, idx) => ({
          id: idx + 1,
          date: '2016-05-03',
          name: 1,
          ab: '欢迎使用u-table',
          address: '北京市' + idx + 1
        }))
      }
    },
    methods: {
      tabchange() {

      }
    },
    watch: {
      radio1: function (val) {
        if (val === 'tab1') {
          this.$refs.plTableTab1.doLayout()
        } else if (val === 'tab2') {
          this.$refs.plTableTab2.doLayout()
        } else {
          this.$refs.plTableTab3.doLayout()
        }
      }
    }
  }
</script>
