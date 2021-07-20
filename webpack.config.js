const path = require("path");

module.exports = {
    entry: './dev/js/index.js',
    output:{
        filename:"bundle.js",
        path: path.resolve(__dirname, 'src/js'),
    },
    mode: 'production',
    resolve: {
        alias: {                
            vue: "./vue.esm-bundler.js"
        }
    }
    

}