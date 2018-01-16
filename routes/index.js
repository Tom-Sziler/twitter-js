const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true} );
});

router.use(express.static('public'));

router.get('/users/:name', function(req, res, next) {
  const name = req.params.name;
  let list = tweetBank.find( {name: name} );
  res.render('index', {tweets: list, showForm: true, name: name});
});

router.get('/tweets/:id', function(req, res, next) {
  const id = req.params.id;
  let tweet = tweetBank.find( {id: id} );
  res.render('index', {tweets: tweet} );
});

const urlencodedParser = bodyParser.urlencoded();

router.post('/tweets', urlencodedParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);
  const name = req.body.name;
  const text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
})

// router.get('/stylesheets/:file', (req, res, next) => {

// var options = {
//    root: __dirname + '/../public/stylesheets/',
//    dotfiles: 'deny',
//    headers: {
//        'x-timestamp': Date.now(),
//        'x-sent': true
//    }
//  };

// var fileName = req.params.file;

// res.sendFile(fileName, options,  (err) =>{
// 	if(err){
// 		next(err);
// 	} else {
// 		console.log("Sent:", fileName);
// 	}
// })
// })

module.exports = router;
