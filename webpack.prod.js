const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin'); // Provides the CleanWebpack plugin
const common = require("./webpack.common"); // Provides the contents of "webpack.common.js"
const {
    merge
} = require("webpack-merge"); // Provides the "webpack merge plugin"

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader, // 3. Extract css into files
                "css-loader", // 2. Turns css into common javascript
                "sass-loader", // 1. Turn sass into css
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        })
    ],
});