var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var parser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
//var get_info = require('./utils');


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



var input_id;


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route

router.post('/post', function(req, res) {
   var iiid = req.body.id;
  //var iiid = req.body["id"];
  console.log(iiid);
  res.render( 'test' , {id:iiid});
          });

router.get('/control', function(req, res) {
    res.render( 'admin_main_control' , {state:'Done!'
                        });

});


// define the about route
router.get('/about', function(req, res) {
  res.send('admin_page_test');
});

module.exports = router;