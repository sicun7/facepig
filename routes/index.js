var express = require('express');
var router = express.Router();
var db = require("../config/db");

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

router.get('/course_detail', function (req, res, next) {
  res.sendfile('public/pages/course_detail.html');
});


router.get('/course_detail/:id', function (req, res, next) {
  var id = req.params.id;
  db.query("select * from fp_tutorial where id =" +id ,function(err,rows){
    if(err){
        res.send({code: 500, msg:' 服务器暂不可用!'});
    }else {
      if(rows && Array.isArray(rows)){
        var item = rows[0];
        if(item){
            // res.render('detail', {
            //   item: item
            // });
            res.send({code: 0, result: item});
        }
        updateReadcount(rows);
      }
    }
  });
});



router.get('/tutorial_list', function(req, res, next){
  db.query("select * from fp_tutorial",function(err,rows){
    if(err){
        res.send({code: 500, msg:' 服务器暂不可用!'});
    }else {
        res.send({code: 0, result: rows});
        updateReadcount(rows);
    }
  });
})




function updateReadcount(list){
  list.forEach(function(item){
      var sql = "update fp_tutorial set read_count = '"+ (item.read_count +1) +"'  where id = " + item.id;
      db.query(sql,function(err,rows){
        if(err){
           //console.error('更新read_count失败');
        }else {
           //console.log('更新read_count成功');
        }
      });
  });
}

module.exports = router;