const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.[chunghash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'sign-up.html',
            template: './src/sign-up.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'index2.html',
            template: './src/index2.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, 'src/assets/img/favicon1.png'),
                to: path.resolve(__dirname, 'dist')
              }
            ]
          }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            sources: true,
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset',
            },
        ]
    },
    devServer: {
        port: 4200
    }
}
