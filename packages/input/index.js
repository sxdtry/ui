//引入input组件
import Input from "./src/input.vue"
//给组件注册install方法
Button.install = function(Vue){
    Vue.component(Input.name,Input)
}
//导出组件
export default Input