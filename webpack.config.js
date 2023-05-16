const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {bundle: path.resolve(__dirname, 'src/index.js')},
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Battleship',
            filename: 'index.html',
            template: 'src/template.html'
        }),
    ],
}