var express = require('express');
var router = express.Router();
var mysql = require('mysql');
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
router.get('/all', function(req, res) {
    sess = req.session;
    res.render( 'mid' , {DBdata:'Done!',
                         All:sess
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

/** session 확인 */
router.route('/confirmSession').get(function (req, res) {
  console.log('세션을 확인해보자!!');
  let msg = `세션이 존재하지 않습니다.`
  if (req.session.user) {
      msg = `${req.session.user.name}님의 나이는 ${req.session.user.age}살 입니다. 세션의 생성된 시간 : ${req.session.user.createCurTime}`;
  }

  res.send(msg);

});

router.route('/').get(function (req, res) {
  console.log('루트접속');

  if(req.session.user){
      console.log(`세션이 이미 존재합니다.`);
  }else{
      req.session.user = {
          "name" : "Master Yunjin",
          "age" : 25,
          "createCurTime" : new Date()
      }
      console.log(`세션 저장 완료! `);
  }
  res.redirect(`/confirmSession`);

});



// define the about route
router.get('/about', function(req, res) {
  res.send('About Dataㅠㅠㅠㅠㅠㅠㅠㅠㅠ');
});

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
  });
});
router.get('/login', function(req,rsp){    

  var tagId = req.query.id;
  
  connection.query('select EXISTS (select * from User where User_Id=' +tagId+') as success');

});
router.get('/logout', function(req,rsp){  
  delete req.session.uid;
  delete req.session.isLogined;
  delete req.session.user_ID;
  
  req.session.save(function(){
      rsp.redirect('/');
  });
});

exports.solo=function(){
  consol.log(JSON.stringify(test));
}
module.exports = router;
