const path = require('path');
const webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: PATHS.build,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: PATHS.app,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        include: PATHS.app,
        loader: 'style!css'
      }
    ]
  }
};
