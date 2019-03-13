const Router = require('koa-router');
const router = new Router();
var interface = require('../modules/interface');


//封装数据接口
router.get('/api/index', async (ctx, next) => {
    //ctx.body = 'this is index';
    var par = ctx.request.query;
    var pars;

    try {
        var result = await interface.get(pars);
        ctx.body = {
            re: true,
            message: '成功',
            result: result
        }

    } catch (error) {

    }
})



module.exports = router;