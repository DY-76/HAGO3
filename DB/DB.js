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
function (error, results, fields) {
  if (error) throw error;
  console.log('DB_test', results);
});


connection.end();