const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const routes = require('./routes');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

app.use('/', routes);

// app.use((req, res, next) =>{
//   console.log(req.method, req.path);
//   next();
// });















app.listen(3000, () => console.log("App listening on 3000"));