### 虚拟树形表格(基础虚拟，不解决列多情况)

  建议开启使用：show-body-overflow 和 show-header-overflow 。

  必须指定 row-key  必须开启use-virtual。

 （注意：不给height或者不给maxheight，又或者给的是0，use-virtual直接会关闭）。 树且不能用，不能展开 。

  虚拟树形表格不支持表格存在 selection 复选框

  关于treeConfig配置呢 看文档吧。

:::demo `data`对象数组后，大量数据不建议使用双向绑定的 data 属性（vue 监听会大数据会短暂的卡顿），建议使用 reloadData 函数,请看表格方法
```html
  <template>
   <div>
     <p style="margin: 20px 0;">
         <el-button @click="$refs.plTreeTable.toggleTreeExpansion(treeData[0])">切换第一个</el-button>
         <el-button @click="$refs.plTreeTable.setTreeExpansion(treeData[2], true)">展开第三个</el-button>
         <el-button @click="$refs.plTreeTable.setAllTreeExpansion()">展开全部</el-button>
         <el-button @click="$refs.plTreeTable.clearTreeExpand()">关闭所有</el-button>
         <el-button @click="getTreeExpansionEvent">获取已展开</el-button>
     </p>
     <u-table
          ref="plTreeTable"
          fixed-columns-roll
          beautify-table
          header-drag-style
          :height="height"
          :treeConfig="{children: 'children', expandAll: false}"
          use-virtual
          row-key="id"
          border>
              <!--u-table大数据表格 你需要在列上指定某个列显示展开收起 treeNode属性-->
              <u-table-column
                 :tree-node="true"
                 prop="address"
                 label="我是树节点"
                 fixed
                 :width="200"/>
              <u-table-column
                 v-for="item in columns"
                 :key="item.id"
                 :prop="item.prop"
                 :label="item.label"
                 :width="item.width"/>
        </u-table>
    </div>
 </template>

  <script>
    export default {
      data() {
        return {
          height: 400,
          columns: Array.from({ length: 10 }, (_, idx) => ({
              prop: 'address', id: idx, label: '地址' + idx, width: 200
          }))
        }
      },
      mounted () {
          // console.log(500 + (500 * 500) + (500 * 500 * 10))
          const data = Array.from({ length: 500 }, (_, idx) => ({
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
        this.treeData = data // 知道为啥treeData不在 data()方法里面定义吗？嘻嘻
        // 设置表格数据
        this.$refs.plTreeTable.reloadData(data)
        // 获取表格实例，里面可以得到列，表格数据等等
        console.log(this.$refs.plTreeTable.tableExample())
      },
      methods: {
            // 获取已经展开的节点
            getTreeExpansionEvent () {
                console.log(this.$refs.plTreeTable.getTreeExpandRecords())
            },
      }
    }
  </script>
```
:::

###  下面是关于u-table的虚拟树形数据的介绍，希望读完下面的文字
``` javascript

     // （最大数量500）当然你可以更多，那么只会导致你遍历时间多，页面等待时间长，（并非渲染节点时间长）
     // 另外 就以下的这个层级，总数据量全部展开后，就是 1000 + (1000 x 2) + (1000 x 2 x 1) = 5000 的总数据量

     // 如果你 第一级是500， 第二级也是500， 第三级是10。 那么你的数据量就是 500 + (500 x 500) + (500 x 500 x 10) = 上百万 的总数据量，这是非常吓人的
     // 所以结合自己情况去给树数据，不要瞎乱给表格的数据，树节点避免不了去递归，如果你的数据量很大很大，那么你会死在遍历上。

     // 所以并非第一级不能超过500，是想告诉你们嵌套里面子节点层级数据量不要太大。比如你可这样的： 第一级为1000， 第二级为2-5的数据量，
     // 第三级为2-5的数据量....， 那么这样算下来，就是 1000 + (1000 x 3) + (1000 x 3 x 2)  = 10000的数据量，应该是可以的，但是记住要是太大的嵌套数据。那只会导致
     // 程序卡在遍历数据上，因为程序需要慢慢去递归遍历。这是没有办法的。

     // 但是传统el-table  或者el-tree他们数据量超过200  就会卡。 所以我们已经很好的优化了这一点。不过看来现实场景中，对树形数据的要求，应该数据量不会太大。

     // 你可以在u-table的基础上去改改样式，就可以变相的去实现el-tree的组件了哦，你隐藏下头部，把行的高度给小一点。然后隐形边框线。是不是就是el-tree了呢？？？

    var dataList = Array.from({ length: 1000 }, (_, idx) => ({
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

```
