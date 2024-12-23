import path from 'path';
import webpackNodeExternals from 'webpack-node-externals';

export default {
    mode: 'development',
    target: 'node',
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve('dist'),
        clean: true,
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    externals: [webpackNodeExternals()],
};
