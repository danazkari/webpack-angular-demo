var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

exports.context = __dirname + '/src';

exports.entry = {
    'app': './index.js'
};

exports.output = {
    path: __dirname + '/dist',
    filename: '[name].min.js'
};

exports.resolve = {
    extensions: [
        '', '.js', '.common.js'
    ]
};

exports.module = {
    loaders: [
        { test: /\.html$/, loader: 'html', exclude: /node_modules/ },
        { test: /\.js$/, loader: 'jshint', exclude: /node_modules/ },
        { test: /\.scss$/, loader: 'style!css!sass', exclude: /node_modules/ },
        { test: /\.json$/, loader: 'json', exclude: /node_modules/ },
        { test: /\.(gif|jpg|png|woff[2]*|svg|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file?name=[path][name].[ext]', exclude: /node_modules/ }
    ]
};

exports.plugins = [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        inject: true,
        template: 'src/index.html',
        filename: 'index.html'
    })
];
