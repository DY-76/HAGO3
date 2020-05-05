var fs = require('fs');
var ejs = require('ejs');
var http = require('http');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

var mySqlClient = mysql.createConnection({
	user : 'root',
	password : 'jjuny1977',
	database : 'hagoproject'
});

var app = express();

http.createServer(app).listen(5050, function(){
	console.log('Server running at http://127.0.0.1:5050');
});

app.get( '/', function(req, res){
	
	fs.readFile('list.html', 'utf8', function(error, data){
		if(error){
			console.log('readFile Error');
		}else{
			mySqlClient.query('select * from user', function(error, results){
				if(error){
					console.log('error : ', error.message);
				}else{
					res.send( ejs.render(data, {
						prodList : results
					}));
				}
			});
		}
	})
});

app.get('/delete/:id', function(req, res){
	mySqlClient.query('delete from user where id = ?', [req.params.id], 
			function(error, result){
				if(error){
					console.log('delete Error');
				}else{
					console.log('delete id = %d', req.params.id);
					res.redirect('/');				
				}
			});
});

app.get('/insert', function(req, res){
	fs.readFile('insert.html', 'utf8', function(error, data){
		if(error){
			console.log('readFile Error');
		}else{
			res.send(data);
		}
	})
});

app.get( '/edit/:id', function(req, res){
	fs.readFile( 'edit.html', 'utf8', function(error, data){
		mySqlClient.query('select * from user where id = ?', [req.params.id], 
				function(error, result){
					if(error){
						console.log('readFile Error');
					}else{
						res.send( ejs.render(data, { 
							product : result[0] 
						}));
					}
				});
	});
});

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.post( '/insert', function(req, res){
	var body = req.body;
	
	mySqlClient.query( 'insert into user(ID, Password, NickName) values(?, ?, ?)',
			[ body.ID, body.Password, body.NickName ], 
			function(error, result){
				if(error){
					console.log('insert error : ', error.message );
				}else{
					res.redirect('/');
				}
	});
});

app.post( '/edit/:id', function(req, res){
	var body = req.body;
	
	mySqlClient.query( 'update user set ID=?, Password=?, NickName=? where id=?',
			[ body.name, body.modelnumber, body.series, body.id ], 
			function(error, result){
				if(error){
					console.log('update error : ', error.message );
				}else{
					res.redirect('/');
				}
	});
});