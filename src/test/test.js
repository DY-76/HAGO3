'use strict';

var ttest = create_file();


function create_file(){
const fs = require('fs');


fs.writeFileSync('test.txt','test');
}

create_file();
exports.test = create_file;