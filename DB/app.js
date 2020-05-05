const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const api = require('./DB_router');
var session = require('express-session');  
var MySQLStore = require('express-mysql-session')(session);
var options ={                                               
    host     : 'localhost',
    user     : 'root',
    password : 'jjuny1977',
    database : 'hagoproject',
    port     : 3306
};
var sessionStore = new MySQLStore(options);  
app.use(session({                                             
    secret:"asdfasffdas",
    resave:false,
    saveUninitialized:true,
    store: sessionStore                                       
  }))
 

app.set('views',__dirname+'/views');
//app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use('/DB', api);
app.get('/', function(req, res){
    ​	if(req.session.authId)
    ​		res.send(authId+'님 로그인되었습니다');
    ​	else
    ​		res.send('로그인하세요!');
    });

  
const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`Listening on port ${port}...`));
