'use strict';
import { alone_stage1 } from '../stage/alone_stage1';

export function alone_Stage(i){
    switch (i) {
        case 1:

            break;
        case 2:
            var alone_stage2 = JSON.stringify(alone_stage1);
            break;

        default :
    }
    var load_data2 = JSON.parse(alone_stage2);
    console.log(load_data2);

   return load_data2;

}