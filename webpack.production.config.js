const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./webpack.common.config');
const pkg = require('./package.json');

module.exports = Object.assign({}, config, {
    module: {
        loaders: config.module.loaders.concat([{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style', 'css?minimize!postcss!sass')
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css?minimize!postcss')
        }])
    },

    plugins: config.plugins.concat([
        new ExtractTextPlugin('css/styles.[hash].css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            comments: false
        }),
        new webpack.BannerPlugin(`${pkg.name}-${new Date()}`),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ])
});
