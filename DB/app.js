const express = require('express');
const bodyParser = require('body-parser')
const app = express();
var session = require('express-session');
const api = require('./DB_router');


app.set('views',__dirname+'/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use('/DB', api);
app.use(session({
    ​	secret: 'aqs456', //keboard cat (랜덤한 값)
    ​	resave: false,
    ​	saveUninitialized: true
    }));


const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`Listening on port ${port}...`));
