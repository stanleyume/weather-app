const path = require('path');

module.exports = {
  devServer: {
    host: 'localhost',
    port: '5000',
    compress: true,
    contentBase: path.join(__dirname, 'public')
  },

  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/app.js',
    // publicPath: '/public/'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: ['babel-preset-env', 'babel-preset-react']
        //   }
        // }
      },
      {
        test: /\.(css|sass)$/,
        loader: 'style-loader!css-loader!sass-loader'
        // loader: 'style-loader!css-loader'
        // use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,
        loader: 'file-loader'
      }
    ]
  }


};
