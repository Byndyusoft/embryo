const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('./package.json');

const config = {
    entry: {
        app: path.join(__dirname, 'src', 'index.js')
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'js/[name].[hash].js',
        publicPath: '/'
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
            loader: ExtractTextPlugin.extract('style', 'css?minimize!postcss!sass')
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css?minimize!postcss')
        },{
            test: /\.png$/,
            loader: 'file?name=img/[name].[hash].[ext]'
        }]
    },

    postcss() {
        return [autoprefixer];
    },

    plugins: [
        new HtmlWebpackPlugin({ template: path.join(__dirname, 'src', 'index.html') }),
        new webpack.NoErrorsPlugin(),
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
    ]
};

module.exports = config;
