module.exports = {
  devServer: {
    host: 'localhost',
    port: '3000'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }

        }
      }
    ]
  }


}
