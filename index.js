var koa = require('koa');
var serve = require('koa-static');
var app = koa();

app.use(serve('./docs/'));
app.listen(80);