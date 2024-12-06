/*
 * @Date: 2024-12-06 09:11:17
 * @Description: Modify here please
 */
import Vue from "vue";
import umyTable from "umy-table";
// console.log(umyTable)
// 测试
// import UmyUi from '../../lib/umy-ui.common'

// 开发
import UmyUi from "../../index";
// console.log(UmyUi)
Vue.use(UmyUi);

Vue.use(umyTable);

function getEventTargetNode(evnt, container, className) {
  let targetElem;
  let target = evnt.target;
  console.log(target);
  while (target && target.nodeType && target !== document) {
    if (
      className &&
      target.className &&
      target.className.split &&
      target.className.split(" ").indexOf(className) > -1
    ) {
      targetElem = target;
    } else if (target === container) {
      return {
        flag: className ? !!targetElem : true,
        container: container,
        targetElem: targetElem,
      };
    }

    target = target.parentNode;
  }

  return {
    flag: false,
  };
}

function handleClearEvent(params, e) {
  const bodyElem = document.body;
  const evnt = params.$event || e;

  // 如果你是一个el的选择器组件节点，你还可以写一些其他类名，比如你自己的自定义弹窗的外层css类名
  if (getEventTargetNode(evnt, bodyElem, "el-select-dropdown").flag) {
    return false;
  }
  // console.log(getEventTargetNode(evnt, bodyElem, "el-select-dropdown").flag);
  // return false;
}

UmyUi.interceptor.add("event.clearActived", handleClearEvent);
