'use strict';
import * as alone_stage from './alone_stage.js';

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