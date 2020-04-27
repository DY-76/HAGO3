
//    var scandb = document.getElementById('scan_db');

//scandb.onclick = function(){
    var mysql = require('mysql');

    var connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'jjuny1977',
        port:'3306',
        database:'hagoproject'
    });

    connection.connect();

    connection.query('select * from user', function(err, row, fields){
        if(!err) {
            console.log(rows);
        }
        else {
            console.log('Error!', err);
        }

});

connection.end();

//}

