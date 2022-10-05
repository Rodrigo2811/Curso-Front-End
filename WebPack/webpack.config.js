const path = require('path')

module.exports = {


  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(_dirname, 'dist')
  }
}