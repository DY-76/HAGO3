var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'jjuny1977',
    database : 'hagoproject',
    port     : '3306'
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
  })
  
  //connection.end();
  


var input_id;
function getParam(sname) {
  var params = location.search.substr(location.search.indexOf("?") + 1);

  var sval = "";

  params = params.split("&");

  for (var i = 0; i < params.length; i++) {
      var temp = params[i].split("=");
      if ([temp[0]] == sname) {
          sval = temp[1];
      }
  }
  return sval;
}

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/all', function(req, res) {
    res.render( 'mid' , {DBdata:'Done!',
                         All:JSON.stringify(test)
                        });
    
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

router.get('/id', function(req, res) {
  input_id = getParam('id');
  connection.query('SELECT User_Id FROM User WHERE id=input_id', 
  function (err, result, fields) {
      if (!err){
      
      res.render( 'mid' , {DBdata:'Done!',
                         All:JSON.stringify(result)
                        });
      
      }
    else{
      console.log('Error while performing Query.', err);
    }
  })
})


exports.solo=function(){
  consol.log(JSON.stringify(test));
}
module.exports = router;
