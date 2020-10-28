const path = require('path');
const HTMLplugin = require('html-webpack-plugin');

const rules = [
    {

        test: /\.ts$|tsx/,
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json']
        },
        exclude: '/node_modules/',
        use: {
            loader: 'babel-loader'
        }
    },
    {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
            limit: 25000,
        },
    },
    {
        test: /\.(s[ac]ss|less)$/,
        exclude: '/node_modules/',
        use: ['style-loader',
            'css-loader',
            'less-loader',
            'sass-loader']
    }
];

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve('build'),
        filename: 'bundle.js'
    },
    module: { rules },

    plugins: [
        new HTMLplugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}