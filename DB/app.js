const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const app = express();
var cors = require('cors');
const api = require('./DB_router');
const admin_api = require('./admin_router');
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
app.use(cors());
app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({limit:"1mb",extended:false}))
app.use(bodyParser.json({limit:"1mb"}));
app.use('/DB', api);
app.use('/admin', admin_api);

  
const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`Listening on port ${port}...`));
