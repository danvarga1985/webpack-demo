const path = require("path");
module.exports = {
    // development won't minify the code
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
    },
    module: {
        rules: [{
            test: /\.css$/,
            // Order is important! Processed in reverse order -> transform css, then inject it into the dom
            use: ["style-loader", "css-loader"],
        }]
    }
}