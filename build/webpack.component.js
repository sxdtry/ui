const path = require("path");
const {merge} = require("webpack-merge");
const WebpackBaseConfig = require("./webpack.base.js");
const components =require("./component.json");

const basePath = path.resolve(__dirname,"../");
let entries = {};
Object.keys(components).forEach(key=>{
    entries[key] = path.join(basePath,components[key])
})
module.exports = merge(WebpackBaseConfig,{
    mode:"production",
    entry:entries,
    output:{
        path:path.resolve(__dirname,"../lib"),
        publicPath:"/lib/",
        filename:"[name].js",
        chunkFilename:"[id].js"
        // library:"my-library",
        // umdNamedDefine:true
    },
    externals:{
        root:"Vue",
        commonjs:"vue",
        commonjs2:"vue",
        amd:"vue"
    }
})