const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./webpack.config');
const pkg = require('./../package.json');

const cssConfig = {
    sourceMap: false,
    modules: true,
    minimize: true,
    localIdentName: '[hash:base64:7]'
};

config.plugins.push(
    new ExtractTextPlugin('css/styles.[hash].css'),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        comments: false
    }),
    new webpack.BannerPlugin(`${pkg.name}-${new Date()}. RELEASE.`),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        },
        PROJECT_ENV: 'release'
    })
);

const cssLoaders = `css?${JSON.stringify(cssConfig)}!postcss`;

config.module.loaders.push({
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style', `${cssLoaders}!sass`)
}, {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style', cssLoaders)
});

module.exports = Object.assign({}, config, {
    module: {
        loaders: config.module.loaders
    },

    plugins: config.plugins
});
