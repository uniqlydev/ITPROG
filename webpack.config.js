const path = require('path');

module.exports = {
    mode: 'development',
    devTool: 'source-map',
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [{
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    }
};
