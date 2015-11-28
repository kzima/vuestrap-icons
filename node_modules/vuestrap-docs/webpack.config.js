var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

// export config
module.exports = {
  themeLoader: {
    themes: ['./src/theme/_vuestrap.scss', './node_modules/vuestrap/theme/bootstrap.scss'], // overriding vuestrap theme and default one
  },
  resolve: {
    root: path.resolve('./')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel'
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  }
}
