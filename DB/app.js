const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const api = require('./DB_router');


app.set('views','./views');
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use('/DB', api);



const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`Listening on port ${port}...`));
