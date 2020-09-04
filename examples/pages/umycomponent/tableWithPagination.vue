<template>
  <div>
    <h3>带分页的表格</h3>
    <div v-html="md2" style="margin-top: 30px" class="width100"></div>
    <p style="padding: 20px 0">当`u-table`元素中注入`data`对象数组后，给定一个pagination-show为true就可以显示分页啦，分页的属性呢跟element的分页一样，直接把属性配置在u-table就好啦。更多分页属性请看文档api吧。</p>
    <!--放出来会导致打包异常-->
    <!--<u-table-->
      <!--:data="tableData"-->
      <!--:pagination-show="true"-->
      <!--:total="pageForm.total"-->
      <!--:page-size="pageForm.pageSize"-->
      <!--:current-page="pageForm.currentPage"-->
      <!--@handlePageSize="handlePageSize"-->
      <!--:max-height="height">-->
      <!--<u-table-column-->
        <!--prop="name"-->
        <!--label="名字"-->
        <!--width="180">-->
      <!--</u-table-column>-->
      <!--<u-table-column-->
        <!--prop="sex"-->
        <!--label="性别"-->
        <!--width="180">-->
      <!--</u-table-column>-->
      <!--<u-table-column-->
        <!--prop="age"-->
        <!--label="年龄">-->
      <!--</u-table-column>-->
    <!--</u-table>-->
    <div v-html="md" style="margin-top: 30px" class="width100"></div>
  </div>
</template>

<script>
  import md from '../../components/u-table-component/basicTableUsage/tableWithPagination.md'
  import md2 from '../../components/u-table-component/basicTableUsage/tableWithPagination2.md'
  export default {
    computed: {
      md2 () {
        return md2
      },
      md () {
        return md
      }
    },
    data() {
      return {
        height: 300,
        pageForm: {
          total: 1000,
          pageSize: 10,
          currentPage: 1
        },
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
        }, {
          sex: '未知',
          name: '王小狗',
          age: '15'
        }, {
          sex: '未知',
          name: '王小狗',
          age: '15'
        }, {
          sex: '未知',
          name: '王小狗',
          age: '15'
        }, {
          sex: '未知',
          name: '王小狗',
          age: '15'
        }]
      }
    },
    methods: {
      // 分页事件
      handlePageSize ({page, size}) {
        console.log(page, size)
      }
    }
  }
</script>
