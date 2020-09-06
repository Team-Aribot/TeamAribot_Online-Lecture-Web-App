const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          },
          'ts-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }
}