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

//contents_contents 내용 양식
//{"learn":[{"title":"D1","detail":"D_N1"},{"title":"D2","detail":"D_N21"}]}
//ajax_DB컨트롤 부분
router.post('/ajax_test01', function(req, res) {
  connection.query(req.body.test+"",
  function (err, result, fields) {
      if (!err){
      }
    else{
      console.log('Error while performing Query.', err);
    }
  });
  connection.query("SELECT * FROM contents WHERE Contents_No = 6",
  // select Contents_data from contents where Contents_No=10
  function (err, result, fields) {
      if (!err){
        var responseData = {'result' : 'ok', 'test' : result};
        res.json(responseData);
      }
    else{
      console.log('Error while performing Query.', err);
    }
  });
          });

router.post('/save', function(req, res) {

  if (req.body.UserNo != null && req.body.data != null){

    connection.query('select EXISTS (select * from dummy_data where User_No='+req.body.UserNo+') as success',
  function (err, result, fields) {
      if (!err){

        var result_out;
        if (result[0]['success'] == 1){
          result_out = "임시저장소 확인 저장 시도 . . .";

          connection.query("update dummy_data set Data = '"+req.body.data+"' where User_No ="+req.body.UserNo,function(err,result){
            if(!err){
            }
            else{
              console.log('에러발생!_데이터 저장부분 : ',err);
            }

            result_out = result_out+"<br> 저장완료.";
          });
        }

        else{
          result_out = "임시저장소 미확인. 저장소를 생성합니다.";
          connection.query('insert into dummy_data (User_No) values ('+req.body.UserNo+')',function(err,result){
            if(!err){
              result_out = result_out+"<br> 임시저장소 생성 완료. 데이터 업데이트를 시도합니다.";
                connection.query("update dummy_data set Data = '"+req.body.data+"' where User_No ="+req.body.UserNo,function(err,result){
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
      }
      else{
        console.log('Error while performing Query.', err);
      }
    });

    var responseData = {'result' : 'ok', 'test' : req.body.UserNo, 'type' : 'save'};

  }
  else{
    var responseData = {'result' : 'ok', 'test' : 'fail'};
  }
  res.json(responseData);
});

//     connection.query('update contents set Contents_Contents = '+req.body.test,
//     function(err,result,fields) {
//       if (!err){
//         res.json(responseData);
//       }
//       else{
//         console.log('쿼리 업데이트 오류',err);
//       }
//     });

//   }
//   else {}
// });

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

router.post('/contents', function(req, res) {
  if(req.body.ContentsNo != null){
  console.log("in");
  connection.query("SELECT Contents_Json FROM condetails WHERE ConDetails_No = "+req.body.ContentsNo,
  function (err, result, fields) {
      if (!err){
        var test_go = ''+result[0]['Contents_Json'];
        var responseData = {'result' : 'ok', 'test' : test_go, 'type' : 'load'};
        console.log(result);
      }
    else{
      var responseData = {'result' : 'ok', 'test' : 'fail'};
      console.log('Error while performing Query.', err);
    }
    res.json(responseData);
  });


  }
  else{
    console.log("conNo_null");
    console.log('Error while performing Query.', err);
  }
  
  });






  router.post('/update', function(req, res) {

    if (req.body.UserNo != null && req.body.ContentsNo != null){
  
      connection.query('select EXISTS (select * from condetails where ConDetails_No='+req.body.ContentsNo+') as success',
    function (err, result, fields) {
        if (!err){
  
          var result_out;
          if (result[0]['success'] == 1){
            result_out = "저장소 확인 저장 시도 . . .";
  
            connection.query("update condetails set Contents_Json = (SELECT Data FROM dummy_data WHERE User_No = "+req.body.UserNo+") where ConDetails_No ="+req.body.ContentsNo,function(err,result){
              if(!err){
              }
              else{
                console.log('에러발생!_데이터 저장부분 : ',err);
              }
  
              result_out = result_out+"<br> 저장완료.";
            });
          }
  
          else{
            result_out = "저장소 미확인. 저장소를 생성합니다.";
            connection.query('insert into condetails (ConDetails_No) values ('+req.body.ContentsNo+')',function(err,result){
              if(!err){
                result_out = result_out+"<br> 임시저장소 생성 완료. 데이터 업데이트를 시도합니다.";
                  connection.query("update condetails set Contents_Json = (SELECT Data FROM dummy_data WHERE User_No = "+req.body.UserNo+") where ConDetails_No ="+req.body.ContentsNo,function(err,result){
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
        }
        else{
          console.log('Error while performing Query.', err);
        }
      });
  
      var responseData = {'result' : 'ok', 'test' : req.body.UserNo};
  
    }
    else{
      var responseData = {'result' : 'ok', 'test' : 'fail'};
    }
    res.json(responseData);
  });
  


// define the about route
router.get('/about', function(req, res) {
  res.send('admin_page_test');
});

router.get('/post', function(req, res) {
  res.render( 'test' , {test:'Done!'});
});

module.exports = router;