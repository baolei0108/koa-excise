var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: {
        index: './jrc/index.js',
		subject: './jrc/subject.js'
	},
	output: {
		path: path.resolve(__dirname, './public/js/'),
		filename: '[name].js'
	},
	
	module: //加载器配置
    {
        rules: [
            {
                test: /\.(html|ejs)$/,
                use: 'raw-loader'
            }
        ]
    },
	devtool: 'source-map',
  mode: 'development'
};


// 启动webpack命令打包：webpack
//启动监听模式： webpack -watch
//安装：cnpm install -g webpack
//安装：cnpm install -g webpack-cli