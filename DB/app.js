const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const app = express();
const api = require('./DB_router');
var session = require('express-session');  
var MySQLStore = require('express-mysql-session')(session);

var http = require('http');
var options = {
    hostname: 'codinghago.com',
    port:'3389',
    path: '/ip'
  };
 
function handleResponse(response) {
  var serverData = '';
  response.on('data', function (chunk) {
    serverData += chunk;
  });
  response.on('end', function () {
    console.log("received server data:");
    console.log(serverData);
  });
}
 
http.request(options, function(response){
  handleResponse(response);
}).end();


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

app.use('',api);
  
const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`Listening on port ${port}...`));
