var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
//var get_info = require('./utils');


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'jjuny1977',
    database : 'hagoproject',
    port     : '3306'
  });
  connection.connect();

  //POST 방식을 이용한 정보 전달을 가능하게 함(req.body.###)
  var bodyParser = require('body-parser');
  var app = express();

  var options = {
    ​	host     : 'localhost',
    ​	port	: 3306,
     ​user     : 'root',
    ​	password : 'jjuny1977',		//데이터베이스 접근 비밀번호
    ​	database : 'hagoproject',		//데이터베이스의 이름
    };
    var sessionStore = new MySQLStore(options);

    app.use(session({
      ​	secret: '12sdfwerwersdfserwerwef', //keboard cat (랜덤한 값)
      ​	resave: false,
      ​	saveUninitialized: true,
      ​	store: sessionStore
      }));

      
    app.listen(5050, function(){
      ​	console.log('Connected 5050 port!!!');		
      });


//세션 저장 여부에 따라 로그인 결정
      app.get('/', function(req, res){
        ​	if(req.session.authId)
        ​		res.send(authId+'님 로그인되었습니다');
        ​	else
        ​		res.send('로그인하세요!');
        });

        // 유저가 가입하면 사용자 아이디를 세션데이터로 저장하여 자동 로그인
app.post('/auth/register', function(req, res){
  ​	var user={
  ​		AuthId: req.body.authId,
  ​		Password: req.body.password
  ​	};
  ​	var sql = 'INSERT INTO user SET ?';
  ​	conn.query(sql, user, function(err, results){
  ​		if(err){
  ​			console.log(err);
  ​		}else{
  ​			//사용자 아이디를 세션 데이터로 저장
  ​			req.session.authId = req.body.authId;
  ​			req.session.save(function(){
  ​				res.redirect('/');		
  ​			});
  ​		}		
  ​	})
  });

//유저의 세션데이터를 삭제하여 로그아웃
app.get('/logout', function(req, res){
​	delete req.session.authId;
​	req.session.save(function(){
​		res.redirect('/');
​	});
});







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
})


exports.solo=function(){
  consol.log(JSON.stringify(test));
}
module.exports = router;
