var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/root'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/ks2016/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
      include: __dirname
    },{
      test: /(fontawesome-webfont|glyphicons-halflings-regular)\.(woff|woff2|ttf|eot|svg)($|\?)/,
      loader: 'url?limit=1024&name=fonts/[name].[hash].[ext]'
    }, {
      test: /\.(css|less)$/,
      loader: 'style!css!'
    },{
      test: /\.(jpg|png)$/,
      loader: "url?limit=8192"
    },{
      test: /\.json$/,
      loader: 'json'
    }]
  }
};
