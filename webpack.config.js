/**
 * Created by dave.held on 8/8/16.
 */
module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: { presets: [ 'es2015', 'react' ] }
            }
        ]
    }
};