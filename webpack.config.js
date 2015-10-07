var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    IS_BUILD = process.env.IS_BUILD === 'true';

exports.context = __dirname + '/src';

exports.entry = {
    // Execute wether the app is being built or 
    // being server from hot dev server.
    'app': IS_BUILD? './index.js' : ['webpack/hot/dev-server', './index.js']
};


if(!IS_BUILD) {
    // This only in case you have an external 
    // server that runs on port 3000 on localhost.
    exports.contentBase = "http://localhost:3000/";

    exports.output = {
        path: __dirname + '/dist',
        filename: '[name].min.js'
    };

    exports.output.publicPath = 'http://localhost:9080/';
}

exports.resolve = {
    alias: {
        components: '../components'
    },
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
