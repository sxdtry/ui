const path = require("path");
const {merge} = require("webpack-merge");
const WebpackBaseConfig = require("./webpack.base.js");
module.exports = merge(WebpackBaseConfig,{
    mode:"production",
    entry:path.resolve(__dirname,"../index.js"),
    output:{
        path:path.resolve(__dirname,"../lib"),
        publicPath:"/lib/",
        filename:"index.js",
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