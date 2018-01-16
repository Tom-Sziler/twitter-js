const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});


router.use(express.static('public'));


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