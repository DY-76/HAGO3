'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'jjuny1977',
    port:'3306',
    database:'hagoproject'
});

function scandb() {

    connection.connect();

    connection.query('select * from user', function(err, rows, fields){
        if(!err) {
            console.log(rows);
        }
        else {
            console.log('Error!', err);
        }

});

connection.end();

}
function test() {
    console.log("Done!");
}
