'use strict';
import * as alone_stage from './alone_stage.js';

function getParam(sname) {
    var params = location.search.substr(location.search.indexOf("?") + 1);

    var sval = "";

    params = params.split("&");

    for (var i = 0; i < params.length; i++) {
        var temp = params[i].split("=");
        if ([temp[0]] == sname) {
            sval = temp[1];
        }
    }
    return sval;
}

console.log(getParam("stage"));
console.log(getParam("id"));
console.log(getParam("pw"));

export function Stage_out(name,i){
    switch (name) {
        case 'alone':
            var load_data = JSON.parse(alone_stage.alone_stage_sel(i));
            break;
        case 'test':
            
            break;
        default :
            console.log(load_data);
    }
    
   return load_data;
}