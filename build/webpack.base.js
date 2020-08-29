const webpack = require("webpack");
const VueloaderPlugin = require("vue-loader/lib/plugin")
module.exports = {
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader"
            },
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:/node-modules/,
            },
            {
                test:/.\css$/,
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader"},
                ]
            },
            {
                test:/\.(gif|jpg|woff|svg)$/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:8192
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.optimize.ModuleConcatenationPlugin(),
        new VueloaderPlugin()
    ]
}