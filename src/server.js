const Koa = require('koa');
const Router = require('koa-router');
const graphqlHTTP = require('koa-graphql');
const { buildSchema } = require('graphql');

const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');

const schema = require('./api/schema');

const app = new Koa();
const router = new Router();
const PORT = process.env.PORT || 3001;

app.use(logger());
app.use(bodyParser());

router.all('/api', graphqlHTTP({
    schema,
    graphiql: true
}));

app.use(router.routes()).use(router.allowedMethods());

const server = app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`)
});

module.exports = server;