const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const routes = require('./routes');
const socketio = require('socket.io');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true, showForm: true}); // point nunjucks to the proper directory for templates


let server = app.listen(3000, () => console.log("App listening on 3000"));

let io = socketio.listen(server);

app.use('/', routes(io));
