/**
 * Created by navy on 15/4/1.
 */


var webpack=require('webpack');
var path = require('path');

var config={
    context: path.join(__dirname, 'public'),
    entry:{
        'client':'./scripts/myform'
    },
    output: {
        path: path.join(__dirname, '/public/build/'),
        filename: '[name].js',
        publicPath : './build/'
    },

    externals:{
        'react/addons':'React',
        lodash:'_',
        jquery:'jQuery'
    },
    module: {
        loaders: [
            {
                test: /\.jsx/,
                loader: 'jsx-loader?harmony' },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.less']
    }
};
module.exports=config;

webpack(config,function(err,status){})


