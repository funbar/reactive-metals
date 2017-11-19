var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map', // line numbers for debugging
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/', // defines where webpack looks for the files and hot reloading
        'webpack/hot/only-dev-server', // dev server
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'), // where files are outputted in production servers
        filename: 'bundle.js' // standard name
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'], // where webpack looks for the files to bundle together
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_module/,
                loader: ['react-hot', 'babel?presets[]=react,presets[]=es2015'] // react-hot is for hot reloading and babel is for es6 syntax
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // live reloading
        new webpack.NoErrorsPlugin() // fix errors before finishing compiling
    ]
}