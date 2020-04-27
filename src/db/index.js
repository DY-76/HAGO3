/*

var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'jjuny1977',
    port:'3306',
    database:'hagoproject'
});



    connection.connect();

    connection.query('select * from user', function(err, rows, fields){
        if(!err) {
            console.log(rows);
        }
        else {
            console.log('Error!', err);
        }

});

connection.end();


function test() {
    console.log("Done!");
}*/
var express    = require('express');
var mysql      = require('mysql');
var dbconfig   = require('./config/database.js');
var connection = mysql.createConnection(dbconfig);

var app = express();

// configuration ===============================================================
app.set('port', process.env.PORT || 3030);

app.get('/', function(req, res){
  res.send('Root');
});

app.get('/user', function(req, res){

  connection.query('SELECT * from user', function(err, rows) {
    if(err) throw err;

    console.log('The solution is: ', rows);
    res.send(rows);
  });
});

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});