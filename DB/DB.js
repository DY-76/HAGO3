var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'jjuny1977',
  database : 'hagoproject',
  port     : '3306'
});
connection.connect();

connection.query('SELECT * FROM user', 
function (err, rows, fields) {
    if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.', err);
})

connection.end();