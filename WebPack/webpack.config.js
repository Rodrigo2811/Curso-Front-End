const path = require('path')


Module.exports = {

    mode: "development",
    entry: "./src/.js",
     output:{
        filename: 'main.js',
        path: path.resolve(_dirname, 'dist')
    }
}