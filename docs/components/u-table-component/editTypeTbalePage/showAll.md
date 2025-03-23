```html
  <template>
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
```
