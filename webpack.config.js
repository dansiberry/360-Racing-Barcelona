const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
   filename: 'main.css'
});

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: true,
  watchOptions: {
      poll: true
  },
  devServer: {
    contentBase: path.resolve(__dirname),
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false }]
          ]
        }
      }]
    },
    {
        test: /\.scss$/,
        use: extractPlugin.extract({
            use: ['css-loader','postcss-loader', 'sass-loader']
        })
    },
    {
        test: /\.css$/,
        use: extractPlugin.extract({
            use: ['css-loader', 'postcss-loader']
        })
    },
    {
        test: /\.(jpg|png|svg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/'
          }

        }]
    },
    {
        test: /\.(html)$/,
        use: ['html-loader']
    }]
  },
  plugins: [
    extractPlugin,
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        template: 'index.html'
    })
  ]
}
module.exports = config
