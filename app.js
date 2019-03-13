const Koa = require('koa');
const app= new Koa();
const path = require('path');
const views = require('koa-views');
const router = require('./routes');  //默认require routes文件夹下面的index.js文件，若没有index.js则会报错
const apirouter = require('./routes/api.js');  //增加数据路由--用于封装数据接口


// 设置模板目录
app.use(views(__dirname + '/views',{
    extension: 'ejs'
}))
// 设置静态文件目录
app.use(require('koa-static')(__dirname + '/public'));
// session 中间件



//将router 挂载到app上
app.use(router.routes());
app.use(apirouter.routes());


// app.use(async ctx => {
//     ctx.body = 'wise wrong hahha';
// });




app.listen(3000,function () {
    console.log('正在执行.....打开网页查看：http://127.0.0.1:3000/');
});


// 启动程序：nodemon app
//nodemon --inspect app