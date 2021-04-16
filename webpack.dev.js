const path = require("path");
const common = require("./webpack.common"); // Provides the contents of "webpack.common.js"
const {
    merge
} = require("webpack-merge"); // Provides the "webpack merge plugin"

// Refactor this into a function "merge", with the parameter "common" (the common config file, see above)
// This function merges whatever is in common with whatever is in this file.
module.exports = merge(common, {
    // development won't minify the code
    mode: "development",
    module: {
        rules: [{
            test: /\.scss$/,
            // Order is important! Processed in reverse order -> transform css, then inject it into the dom
            use: [
                "style-loader", // 3. Inject styles into DOM
                "css-loader", // 2. Turns css into common javascript
                "sass-loader", // 1. Turn sass into css
            ],
        }],

    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },

});