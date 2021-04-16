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
            test: /\.scss$/,
            // Order is important! Processed in reverse order -> transform css, then inject it into the dom
            use: [
                "style-loader", // 3. Inject styles into DOM
                "css-loader", // 2. Turns css into common javascript
                "sass-loader", // 1. Turn sass into css
            ],
        }]
    }
}