const path = require('path');

module.exports = {
  devServer: {
    host: 'localhost',
    port: '5000'
  },

  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.min.js'
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: ['babel-preset-env', 'babel-preset-react']
        //   }
        // }
      }
    ]
  }


};
