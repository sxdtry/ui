//引入button组件
import Button from "./src/button.vue"
//给组件注册install方法
Button.install = function(Vue){
    Vue.component(Button.name,Button)
}
//导出组件
export default Button