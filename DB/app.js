const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const app = express();
const app2 = express();
const api = require('./DB_router');
const test_api = require('./test_router');
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
app.use(cookieParser());
app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use('/DB', api);

var sessionStore = new MySQLStore(options);  
app2.use(session({                                             
    secret:"asdfasffdas",
    resave:false,
    saveUninitialized:true,
    store: sessionStore                                       
  }))
app2.use(cookieParser());
app2.set('views',__dirname+'/views');
app2.set('view engine', 'ejs');
app2.use(bodyParser.json());
app2.use('', test_api);
  
const port = process.env.PORT || 5050;
const port2 = process.env.PORT || 5151;
app.listen(port, () => console.log(`Listening on port ${port}...`));
app2.listen(port2, () => console.log(`Listening on port ${port2}...`));
