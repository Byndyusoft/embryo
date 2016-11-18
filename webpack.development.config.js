const webpack = require('webpack');
const config = require('./webpack.common.config');

module.exports = Object.assign({}, config, {
    entry: {
        index: ['webpack-hot-middleware/client'].concat(config.entry),
    },

    devtool: 'eval-source-map',

    watchOptions: {
        aggregateTimeout: 300
    },

    module: {
        loaders: config.module.loaders.concat([{
            test: /\.scss$/,
            loader: 'style!css!postcss!sass'
        }, {
            test: /\.css$/,
            loader: 'style!css!postcss'
        }])
    },

    plugins: [new webpack.HotModuleReplacementPlugin()].concat(config.plugins)
});
