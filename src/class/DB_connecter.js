'use strict';
import { test } from '../../DB/DB_router';


const tests = require('../../DB/DB_router').tests;

export function dd(){
console.log(JSON.stringify(tests));
}

function DB_in(){
    return JSON.stringify(test);
}