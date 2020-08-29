

import Button from "./packages/button";
import Input from "./packages/input";

const components = [Button, Input];
const install = function (Vue, opt = {}) {
  //遍历注册组件
  components.forEach((value) => {
    Vue.component(value.name, value);
  });
};

//判断全局是否存在Vue实例，存在则开始注册组件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

//导出install和所有组件

export default {
    install,
    Button,
    Input
}
