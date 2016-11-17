const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        app: [
            'webpack-hot-middleware/client',
            path.join(__dirname, 'src', 'index.js')
        ]
    },

    output: {
        path: path.join(__dirname, 'build', 'js'),
        filename: '[name].[hash].js',
        publicPath: '/'
    },

    devtool: 'eval-source-map',

    watchOptions: {
        aggregateTimeout: 300
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.scss$/,
            loader: 'style!css?minimize!postcss!sass'
        }, {
            test: /\.css$/,
            loader: 'style!css?minimize!postcss'
        }, {
            test: /\.(png|jpg)$/,
            loader: 'file?name=img/[name].[hash].[ext]'
        }]
    },

    postcss() {
        return [autoprefixer];
    },

    plugins: [
        new HtmlWebpackPlugin({ template: path.join(__dirname, 'src', 'index.html') }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;
