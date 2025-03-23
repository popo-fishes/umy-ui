<template>
  <div>
    <h3>展开行</h3>
    <p>
      <el-button @click="$refs.plTable.toggleRowExpand(tableData[1])">切换第二行展开</el-button>
      <el-button @click="$refs.plTable.setRowExpand([tableData[2], tableData[3]], true)">设置第三、四行展开</el-button>
      <el-button @click="$refs.plTable.setAllRowExpand(true)">设置所有行展开</el-button>
      <el-button @click="$refs.plTable.clearRowExpand()">关闭所有行展开</el-button>
    </p>
    <ux-grid ref="plTable"
             border
             height="500"
             :data="tableData"
             :expand-config="{labelField: 'name', expandAll: false}"
             @expand-change="toggleExpandChangeEvent">
      <ux-table-column type="index" width="60"></ux-table-column>
      <ux-table-column type="expand" title="姓名" width="120">
        <template v-slot:content="{ row, rowIndex }">
          <template>
            <ul>
              <li>
                <span>Name：</span>
                <span>{{ row.name }}</span>
              </li>
              <li>
                <span>Name：</span>
                <span>{{ row.age }}</span>
              </li>
            </ul>
          </template>
        </template>
      </ux-table-column>
      <ux-table-column field="sex" title="性别"></ux-table-column>
      <ux-table-column field="age" title="年龄"></ux-table-column>
    </ux-grid>
    <pre class="hljs">
            <code>{{ demo[0] }}</code>
            <code>{{ demo[1] }}</code>
      </pre>
  </div>
</template>

<script>
  // ux-grid展开行示例
  export default {
    name: "expandRow",
    data () {
      return {
        tableData: [],
        demo: [
          `<template>
   <div>
       <p>
           <el-button @click="$refs.plTable.toggleRowExpand(tableData[1])">切换第二行展开</el-button>
           <el-button @click="$refs.plTable.setRowExpand([tableData[2], tableData[3]], true)">设置第三、四行展开</el-button>
           <el-button @click="$refs.plTable.setAllRowExpand(true)">设置所有行展开</el-button>
           <el-button @click="$refs.plTable.clearRowExpand()">关闭所有行展开</el-button>
       </p>
       <ux-grid ref="plTable"
               border
               height="500"
               :data="tableData"
               :expand-config="{labelField: 'name', expandAll: false}"
               @expand-change="toggleExpandChangeEvent">
           <ux-table-column type="index" width="60"></ux-table-column>
           <ux-table-column type="expand" title="姓名" width="120">
               <template v-slot:content="{ row, rowIndex }">
                   <template>
                       <ul>
                           <li>
                               <span>Name：</span>
                               <span>{{ row.name }}</span>
                           </li>
                           <li>
                               <span>Name：</span>
                               <span>{{ row.age }}</span>
                           </li>
                       </ul>
                   </template>
               </template>
           </ux-table-column>
           <ux-table-column field="sex" title="性别"></ux-table-column>
           <ux-table-column field="age" title="年龄"></ux-table-column>
       </ux-grid>
   </div>
</template>`,
          `export default {
        name: "expandRow",
        data () {
          return {
              tableData: []
          }
        },
        mounted () {
            setTimeout(() => {
                this.tableData = Array.from({ length: 100 }, (_, idx) => ({
                    id: idx + 1,
                    name: 'umy' + idx,
                    sex: idx,
                    age: '欢迎使用umy' + idx
                }))
            })
        },
        methods: {
            toggleExpandChangeEvent ({ row, expanded }) {
                console.log('行展开事件' + expanded)
            }
        }
    }`
        ]
      }
    },
    mounted () {
      this.tableData = Array.from({ length: 100 }, (_, idx) => ({
        id: idx + 1,
        name: 'umy' + idx,
        sex: idx,
        age: '欢迎使用umy' + idx
      }))
    },
    methods: {
      toggleExpandChangeEvent ({ row, expanded }) {
        console.log('行展开事件' + expanded)
      }
    }
  }
</script>

<style scoped>

</style>
