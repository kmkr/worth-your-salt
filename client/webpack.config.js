const env = process.env.NODE_ENV

module.exports = {
  context: __dirname,
  entry: {
    bundle: './src/index.js'
  },
  devtool: env !== 'production' ? 'source-map' : false,
  output: {
    path: `${__dirname}/../server/static/scripts`,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
