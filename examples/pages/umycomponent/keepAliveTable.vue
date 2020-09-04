<template>
    <div class="keepAliveTable">
        <h3>keepAlive页面缓存</h3>
        <p>keepAlive页面缓存没太多需要注意的，页面该怎么写表格还是怎么写。然后哪个页面需要缓存就加入到keep-alive中去</p>
        <p><a href="https://github.com/u-leo/umy-ui/blob/master/examples/pages/umycomponent/keepAliveTable/Tab1.vue" target="_blank">tab 1页面的代码</a></p>
        <p><a href="https://github.com/u-leo/umy-ui/blob/master/examples/pages/umycomponent/keepAliveTable/Tab2.vue" target="_blank">tab 2页面的代码</a></p>
        <el-tabs v-model="editableTabsValue" @tab-click="tabClick" type="card">
            <el-tab-pane
                    :key="item.name"
                    v-for="(item, index) in editableTabs"
                    :label="item.title"
                    :name="item.name"/>
        </el-tabs>
        <nuxt-child keep-alive/>
        <pre class="hljs">
            <code>{{ demo[0] }}</code>
            <code>{{ demo[1] }}</code>
        </pre>
    </div>
</template>

<script>
    // keepAlive页面缓存
    export default {
        name: "keepAliveTable",
        data () {
            return {
                keepAliveData:['Tab1', 'Tab2'],
                editableTabsValue: '1',
                editableTabs: [{
                    title: 'Tab 1',
                    name: '1',
                    router: '/'
                }, {
                    title: 'Tab 2',
                    name: '2',
                    router: '/Tab2'
                }],
                demo: [
                    `<template>
              <div class="keepAliveTable">
                 <el-tabs v-model="editableTabsValue" @tab-click="tabClick" type="card">
                     <el-tab-pane
                            :key="item.name"
                            v-for="(item, index) in editableTabs"
                            :label="item.title"
                            :name="item.name"/>
                  </el-tabs>
                  <keep-alive :include="keepAliveData.join(',')">
                     <router-view/>
                  </keep-alive>
               </div>
           </template>
                    `,
                    ` export default {
        name: "keepAliveTable",
        data () {
            return {
                keepAliveData:['Tab1', 'Tab2'],
                editableTabsValue: '1',
                editableTabs: [{
                    title: 'Tab 1',
                    name: '1',
                    router: '/'
                }, {
                    title: 'Tab 2',
                    name: '2',
                    router: '/Tab2'
                }]
            }
        },
        methods:{
            tabClick (row) {
                if (row.label === 'Tab 2') {
                    this.$router.push({
                        path: '/umycomponent/keepAliveTable/Tab2'
                    })
                } else {
                    this.$router.push({
                        path: '/umycomponent/keepAliveTable/Tab1'
                    })
                }
            }
        }
    }`
                ]
            }
        },
        methods:{
            tabClick (row) {
                if (row.label === 'Tab 2') {
                    this.$router.push({
                        path: '/umycomponent/keepAliveTable/Tab2'
                    })
                } else {
                    this.$router.push({
                        path: '/umycomponent/keepAliveTable/Tab1'
                    })
                }
            }
        }
    }
</script>

<style scoped lang="scss">
 .keepAliveTable {
   width: 100%;
   height: 100%;
 }
</style>
