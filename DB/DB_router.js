var express = require('express');
var router = express.Router();
var mysql = require('mysql');
<<<<<<< HEAD
var out = require('./DB_out');
=======
export var tests;
>>>>>>> parent of f08babe... 1

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'jjuny1977',
    database : 'hagoproject',
    port     : '3306'
  });
  connection.connect();
  
  connection.query('SELECT * FROM user', 
  function (err, rows, fields) {
      if (!err){
      console.log('The solution is: ', rows);
      tests = rows;
      
      }
    else{
      console.log('Error while performing Query.', err);
    }
  })
  
  connection.end();
  
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
    res.render( 'example' , {DBdata:'Done!'});
    out.DB_data_out(JSON.stringify(rows));
    
  /*
  connection.query('SELECT * FROM user', (err, rows) => {
    connection.release(); // 연결세션 반환.
    if (err) {
      throw err;
    }

    return res.send({ data: rows }); // 결과는 rows에 담아 전송
  });
  */
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About Dataㅠㅠㅠㅠㅠㅠㅠㅠㅠ');
});

module.exports = router;