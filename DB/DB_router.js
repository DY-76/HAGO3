var express = require('express');
var router = express.Router();
var mysql = require('mysql');

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
  })
  
  //connection.end();
  


var input_id;


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
  var tagId = req.query.id;
  connection.query('select EXISTS (select * from User where User_Id='+tagId+') as success', 
  function (err, result, fields) {
      if (!err){
      
      console.log(tagId); // tagId 들어갔는지
      console.log(req.query.id);// 인식된 값 확인

      res.render( 'mid' , {DBdata:tagId,
                         All:JSON.stringify(result)
                        });
      
      }
    else{
      console.log('Error while performing Query.', err);
    }
  })
});
router.get('/login', function(req,rsp){    
  var post = req.body;
  var tagId = req.query.id;
  connection.query('select EXISTS (select * from User where User_Id='+tagId+') as success', 
  
  [post.id,post.password], function(err,result){
      if(err) throw err;
      if(result[1]!==undefined){
          req.session.isLogined = true;
          //세션 스토어가 이루어진 후 redirect를 해야함.
          req.session.save(function(){                               
              rsp.redirect('/');
          });
      }
  })
});



exports.solo=function(){
  consol.log(JSON.stringify(test));
}
module.exports = router;
