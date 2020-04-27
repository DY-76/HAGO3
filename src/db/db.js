
var mysql=require('mysql')

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'jjuny1977',
    port:'3309',
    database:'hagoproject'
});
export function scan_db(){
connection.connect();

connection.query('select * from user', function(err,row,fields){
    if(!err)
    console.log(rows);
    else
    console.log('Error!',err);

});

connection.end();
};
export function db_compare(){

}