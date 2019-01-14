var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  //res.sendFile(__dirname + '/pages/index.html');
  res.sendfile('public/pages/index.html');
});

router.get('/product', function (req, res, next) {
  res.sendfile('public/pages/product.html');
});

router.get('/download', function (req, res, next) {
  res.sendfile('public/pages/download.html');
});

router.get('/buy', function (req, res, next) {
  res.sendfile('public/pages/buy.html');
});

router.get('/course', function (req, res, next) {
  res.sendfile('public/pages/course.html');
});

router.get('/agent', function (req, res, next) {
  res.sendfile('public/pages/agent.html');
});

router.get('/test', function (req, res, next) {
  res.render('test', {
    title: '测试内容'
  });
});

module.exports = router;