const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const api = require('./DB_router');

app.use(bodyParser.json());
app.use('/DB', api);

app.set('views', __dirname + './views');
app.set('view engine', 'ejs');

const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`Listening on port ${port}...`));
