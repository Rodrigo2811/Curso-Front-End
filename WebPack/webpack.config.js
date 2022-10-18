const path = require('path')
const htmlplugin = require('html-webpack-plugin')
const miniCSS = require('mini-css-extract-plugin')

module.exports = {


  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(sa|c|sc)ss$/,
        use: [
          miniCSS.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/i,
        exclude: '/node_modules',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(jpeg|JPG|png|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new htmlplugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new miniCSS({
      filename: 'style.css'
    })
  ]
}

