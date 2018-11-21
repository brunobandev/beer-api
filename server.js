const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');

const indexRoutes = require('./routes/index');
const beerRoutes = require('./routes/beers');

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(logger());
app.use(bodyParser());
app.use(indexRoutes.routes());
app.use(beerRoutes.routes());

const server = app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
});

module.exports = server;