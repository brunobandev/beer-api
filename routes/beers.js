const Router = require('koa-router');
const router = new Router({prefix: '/beers'});

router.get('/', async (ctx) => {
    ctx.body = {
        status: 'success',
        message: 'hello, world!'
    };
});

router.post('/', async (ctx) => {
    ctx.body = {
        status: 'success',
        message: 'hello, world!'
    };
});

module.exports = router;