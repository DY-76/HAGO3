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
router.get('', function(req, res) {
  res.render( 'test' , {DBdata:'Done!',
                       All:'test'
                      });

router.get('/all', function(req, res) {
    res.render( 'mid' , {DBdata:'Done!',
                         All:'test'
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

router.get('/DBin', function(req, res) {
    console.log("aaaa");

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

        var result_out;
        if (result[0]['success'] == 1){
          result_out = "로그인에 성공하셨습니다. 데이터를 저장합니다.";

        }
        else{
          result_out = "로그인 실패";
        }
        res.render( 'mid' , {DBdata:tagId,
                            All:result_out
                          });
      }
    else{
      console.log('Error while performing Query.', err);
    }
  });

});

router.get('/input', function(req, res) {
  var InputID = req.query.id;
  var InputDATA = req.query.data;

  connection.query('select EXISTS (select * from hago_test where UserID='+InputID+') as success',
  function (err, result, fields) {
      if (!err){
      
      console.log(InputID); // InputID 들어갔는지
      console.log(req.query.id);// 인식된 값 확인

        var result_out;
        if (result[0]['success'] == 1){
          result_out = "저장소 확인. 데이터를 업데이트를 시도합니다.";
          connection.query('update hago_test set data = '+InputDATA+' where UserID ='+InputID,function(err,result){
            if(!err){
            }
            else{
              console.log('에러발생!_데이터 저장부분 : ',err);
            }

            result_out = result_out+"<br> 데이터 업데이트 완료.";
          });
        }

        else{
          result_out = "저장소 미확인. 저장소를 생성합니다.";
          connection.query('insert into hago_test (UserID) values ('+InputID+')',function(err,result){
            if(!err){
              result_out = result_out+"<br> 저장소 생성 완료. 데이터 업데이트를 시도합니다.";
                connection.query('update hago_test set data = '+InputDATA+' where UserID ='+InputID,function(err,result){
                  if(!err){
                  }
                  else{
                    console.log('에러발생!_데이터 저장부분 : ',err);
                  }

                  result_out = result_out+"<br> 데이터 업데이트 완료.";
                });
            }
            else{
              console.log('에러발생!_저장소생성 : ',err);
            }
          });
        }
        result_out = result_out+"<br> 본 화면은 아래 버튼으로 종료하거나, 자동으로 종료됩니다.";
        res.render( 'mid' , {DBdata:InputID,
                            All:result_out+InputDATA
                          });
      }
    else{
      console.log('Error while performing Query.', err);
    }
  });

});

module.exports = router;