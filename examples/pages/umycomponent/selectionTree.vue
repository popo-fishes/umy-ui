<template>
  <div>
    <h3>ux-grid树表格， 虚拟滚动自动关闭</h3>
    <p><a href="https://github.com/u-leo/umy-ui/blob/master/examples/pages/umycomponent/selectionTree.vue" target="_blank">点击查看当前demo页面的代码</a></p>
    <p>最好节点数量不要超过500,不是大数据树。仅为了解决表格树形表格带数据框情况</p>
    <p>在列上配置tree-node 指定为树节点， 即可在当前列显示展开节点图标按钮</p>
    <p>iconOpen || iconClose均为图标库里面的图标。如Iconfont-阿里巴巴矢量图标库</p>
    <p>
      <el-button @click="getTreeExpansionEvent">获取已展开</el-button>
      <el-button @click="$refs.plxTree.setAllTreeExpand(true)">展开所有</el-button>
      <el-button @click="$refs.plxTree.clearTreeExpand()">关闭所有</el-button>
      <el-button @click="$refs.plxTree.toggleTreeExpand(tableData[0])">切换第一个</el-button>
      <el-button @click="$refs.plxTree.setTreeExpand(tableData[2], true)">展开第三个</el-button>
    </p>
    <ux-grid
      :tree-config="{children: 'children', iconOpen: 'el-icon-upload2', iconClose: 'el-icon-download'}"
      :data="tableData"
      ref="plxTree"
      height="400"
      :checkbox-config="{highlight: true}"
      @selection-change="selectChangeEvent">
      <ux-table-column type="checkbox" width="280" tree-node></ux-table-column>
      <ux-table-column field="name" title="Name" width="200"></ux-table-column>
      <ux-table-column field="size" title="Size" width="200"></ux-table-column>
      <ux-table-column field="type" title="Type" width="200"></ux-table-column>
      <ux-table-column field="date" title="Date" width="200"></ux-table-column>
      <ux-table-column field="name" title="Name" width="200"></ux-table-column>
    </ux-grid>
    <div style="padding: 20px 0; color: red">
      <p style="color: red">懒加载</p>
      <p>树表格的懒加载，通过配置 row-id 和 tree-config={lazy, loadMethod} 加载方法来开启树形懒加载
        当启用懒加载后，必须通过 hasChild 属性来标识是否存在子节点，从而控制该节点是否允许被点击</p>
      <p style="color: red">（注：懒加载启用后一次只允许异步加载一层根节点）</p>
      <ux-grid
        ref="plxTree2"
        row-id="id"
        height="400"
        :tree-config="{lazy: true, children: 'children', hasChild: 'hasChildren', iconLoaded: 'el-icon-loading', loadMethod: loadChildrenMethod}"
        :data="tableDataLazy">
        <ux-table-column field="name" title="Name" width="400" tree-node></ux-table-column>
        <ux-table-column field="size" title="Size"></ux-table-column>
        <ux-table-column field="type" title="Type"></ux-table-column>
        <ux-table-column field="date" title="Date"></ux-table-column>
      </ux-grid>
    </div>
    <p style="padding: 20px 0; color: red">你还可以改成这样的树形控件</p>
    <ux-grid
      show-overflow
      highlight-hover-row
      row-key
      height="400"
      ref="plxTree2"
      border="inner"
      :show-header="false"
      :data="tableData2"
      :checkbox-config="{labelField: 'name'}"
      :tree-config="{children: 'children', accordion: true, line: true, iconOpen: 'el-icon-minus', iconClose: 'el-icon-plus'}">
      <ux-table-column type="checkbox" tree-node>
        <!--自定义展开部分的内容-->
        <template v-slot="{ row }">
                  <span>
                    <template v-if="row.children && row.children.length">
                      <i style="margin-left: 8px" :class="$refs.plxTree2.isTreeExpandByRow(row) ? 'el-icon-folder-opened' : 'el-icon-folder'"></i>
                    </template>
                    <template v-else>
                      <i style="margin-left: 8px" class="el-icon-document"></i>
                    </template>
                    <span>{{ row.ab }}</span>
                  </span>
        </template>
      </ux-table-column>
      <ux-table-column title="操作" width="140">
        <template v-slot="{ row }">
          <span class="el-icon-close"></span>
          <span class="el-icon-download" style="margin-left: 10px"></span>
          <span class="el-icon-edit-outline" style="margin-left: 10px"></span>
        </template>
      </ux-table-column>
    </ux-grid>
  </div>
</template>

<script>
  export default {
    name: "selectionTree",
    data () {
      return {
        tableData: [],
        tableData2: [],
        tableDataLazy: [
          {
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          hasChildren: true
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          id: 5,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          id: 6,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          id: 7,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          id: 8,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    mounted () {
      setTimeout(() =>{
        const data = Array.from({ length: 50 }, (_, idx) => ({
          id: idx + '_' + 1,
          date: '2016-05-03',
          name: 1,
          ab: '欢迎使用u-table',
          address: idx,
          children: Array.from({ length: 2 }, (_, idx2) => ({
            id: idx + '_' + idx2 + '_' + 1,
            date: '2016-05-03',
            name: 1,
            ab: '欢迎使用u-table',
            address: idx + '_' + idx2,
            children: Array.from({ length: 1 }, (_, idx3) => ({
              id: idx + '_' + idx2 + '_' + idx3 + '_' + 1,
              date: '2016-05-03',
              name: 1,
              ab: '欢迎使用u-table',
              address: idx + '_' + idx2 + '_' + idx3
            }))
          }))
        }));
        const data2 = Array.from({ length: 30 }, (_, idx) => ({
          id: idx + '_' + 1,
          date: '2016-05-03',
          name: 1,
          ab: '欢迎使用u-table',
          address: idx,
          children: Array.from({ length: 2 }, (_, idx2) => ({
            id: idx + '_' + idx2 + '_' + 1,
            date: '2016-05-03',
            name: 1,
            ab: '欢迎使用u-table',
            address: idx + '_' + idx2,
            children: Array.from({ length: 1 }, (_, idx3) => ({
              id: idx + '_' + idx2 + '_' + idx3 + '_' + 1,
              date: '2016-05-03',
              name: 1,
              ab: '欢迎使用u-table',
              address: idx + '_' + idx2 + '_' + idx3
            }))
          }))
        }));
        this.tableData = data
        this.tableData2 = data2
      })
    },
    methods: {
      selectChangeEvent (rows) {
        console.log(rows)
      },
      getTreeExpansionEvent () {
        let treeExpandRecords = this.$refs.plxTree.getTreeExpandRecords()
        console.log(treeExpandRecords)
      },
      // 懒加载
      loadChildrenMethod ({ row }) {
        // 这是你的行row,你可以获取你的row.id，去发请求 找后端拿数据，然后在返回你懒加载的数据
        // console.log(row)
        // （必须返回 Promise<any[]>对象）
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve([
              {
                id: 31,
                date: '2016-05-01',
                name: '懒加载王小虎1',
                address: '上海市普陀区金沙江路 1519 弄'
              }, {
                id: 32,
                date: '2016-05-01',
                name: '懒加载王小虎2',
                address: '上海市普陀区金沙江路 1519 弄'
              }
            ])
          }, 1000)
        })
        // 请求后端示例 axios.get本来就是返回一个Promise
        // return axios.get('/api/test/list', { parentId: row.id })
      }
    }
  }
</script>

<style scoped>

</style>
