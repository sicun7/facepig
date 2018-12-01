var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  //res.sendFile(__dirname + '/pages/index.html');
  res.sendfile('public/pages/index.html');
});

router.get('/fn', function (req, res, next) {
  res.sendfile('public/pages/fn.html');
});

router.get('/download', function (req, res, next) {
  res.sendfile('public/pages/download.html');
});

router.get('/price', function (req, res, next) {
  res.sendfile('public/pages/price.html');
});

router.get('/test', function (req, res, next) {
  res.render('test', {
    title: '测试内容'
  });
});

module.exports = router;