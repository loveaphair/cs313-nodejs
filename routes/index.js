var express = require('express');
var router = express.Router();
var server = require('./server');

router.post('../views/index.ejs', function(req, res){
  var data = req.data;
})

/* GET home page. */
loadPage(server.newsHeadlines);
function loadPage(newsHeadlines){
    router.get('/', function(req, res, next) {
    res.render('index', { 
      title: 'Express',
      data: server.newsHeadlines
    });
  });
}

module.exports = router;