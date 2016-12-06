const webpack = require('webpack');
const config = require('./webpack.config');
const pkg = require('./../package.json');

const cssConfig = {
    sourceMap: true,
    modules: true,
    minimize: false,
    localIdentName: '[folder]__[name]__[local]--[hash:base64:5]'
};

config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
config.plugins.push(
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({ PROJECT_ENV: 'debug' }),
    new webpack.BannerPlugin(`${pkg.name}-${new Date()}. DEBUG.`)
);

const stylesLoaders = `style!css?${JSON.stringify(cssConfig)}!postcss`;

config.module.loaders.push({
    test: /\.scss$/,
    loader: `${stylesLoaders}!sass`
}, {
    test: /\.css$/,
    loader: stylesLoaders
});

module.exports = Object.assign({}, config, {
    entry: {
        index: ['webpack-hot-middleware/client', config.entry.index],
    },

    devtool: 'eval-source-map',

    watchOptions: {
        aggregateTimeout: 300
    },

    module: {
        loaders: config.module.loaders
    },

    plugins: config.plugins
});
