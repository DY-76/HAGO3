var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var parser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'jjuny1977',
    database : 'hagoproject',
    port     : 3306
  });

  //connection.connect();
  var test;
  connection.query('SELECT * FROM user', 
  function (err, rows, fields) {
      if (!err){
      console.log('The solution is: ', rows);
      test = rows;

      }
    else{
      console.log('Error while performing Query.', err);
    }
  });


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.post('/ajax_test01', function(req, res) {
  var responseData = {'result' : 'ok', 'test' : req.body.test};
  connection.query('UPDATE Contents set Contents_data = '+req.body.test+'WHERE Contents_No = 10',
  function (err, result, fields) {
      if (!err){
        res.json(responseData);
      }
    else{
      console.log('Error while performing Query.', err);
    }
  });
          });


router.get('/control', function(req, res) {

  var contents_cnt;

  connection.query('SELECT COUNT(*) as cnt FROM contents',
  function (err, result, fields) {
      if (!err){

        contents_cnt = result[0]['cnt'];



        res.render( 'admin_main_control' , {state:'ready...',
                                            test_value:'test_value_001',
                                            table:contents_cnt});

      }
    else{
      console.log('Error while performing Query.', err);
    }
  });

});


// define the about route
router.get('/about', function(req, res) {
  res.send('admin_page_test');
});

module.exports = router;