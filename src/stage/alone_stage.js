function a(){
    console.log(alone_stage1);
}


export function alone_stage_sel(i){
    switch(i) {

        case 1:
            return JSON.stringify(alone_stage1);
        case 2:
            return JSON.stringify(alone_stage2);
        default:
            return JSON.stringify(alone_stage2);
    }
}
var alone_stage1 = {"objects":[{"id":"7y0y","name":"아이","script":"[[{\"id\":\"wvw2\",\"x\":50,\"y\":30,\"type\":\"when_run_button_click\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"02ry\",\"x\":0,\"y\":0,\"type\":\"func_hsq1\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"8y73\",\"x\":0,\"y\":0,\"type\":\"func_hsq1\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"gqh5\",\"x\":0,\"y\":0,\"type\":\"func_hsq1\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"mplm\",\"x\":0,\"y\":0,\"type\":\"func_hsq1\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"ukus\",\"x\":0,\"y\":0,\"type\":\"func_hsq1\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"nqe0\",\"x\":0,\"y\":0,\"type\":\"func_hsq1\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]","objectType":"sprite","rotateMethod":"free","scene":"7dwq","sprite":{"pictures":[{"id":"vx80","dimension":{"width":181,"height":362,"scaleX":0.3154574132492113,"scaleY":0.3154574132492113},"fileurl":"/lib/entry-jsimg/kid.png","name":"아이1","scale":100,"imageType":"png"}],"sounds":[{"duration":1.3,"ext":".mp3","id":"8el5","fileurl":"/lib/entry-js/images/media/intro.mp3","name":"인트로"}]},"selectedPictureId":"vx80","lock":false,"entity":{"x":-196.4,"y":-30.77,"regX":90.5,"regY":181,"scaleX":0.2087023671668135,"scaleY":0.2087023671668135,"rotation":0,"direction":90,"width":181,"height":362,"font":"undefinedpx ","visible":true}},{"id":"7y0y1","name":"박스","script":"[[{\"id\":\"ckfa\",\"x\":50,\"y\":30,\"type\":\"when_message_cast\",\"params\":[null,\"6fe9\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"9svt\",\"x\":0,\"y\":0,\"type\":\"move_xy_time\",\"params\":[{\"id\":\"fb8p\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"0.5\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"jywo\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"30\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"wzj6\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"0\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]","objectType":"sprite","rotateMethod":"free","scene":"7dwq","sprite":{"pictures":[{"id":"vx801","dimension":{"width":256,"height":256,"scaleX":0.3154574132492113,"scaleY":0.3154574132492113},"fileurl":"/lib/entry-js/images/object/box.png","name":"엔트리봇_걷기1","scale":100,"imageType":"png"}],"sounds":[{"duration":1.3,"ext":".mp3","id":"8e11","fileurl":"/lib/entry-js/images/media/bark.mp3","name":"강아지 짖는소리"}]},"selectedPictureId":"vx801","lock":false,"entity":{"x":-121.74,"y":-41.8,"regX":128,"regY":128,"scaleX":0.24333856612072977,"scaleY":0.24333856612072977,"rotation":0,"direction":90,"width":256,"height":256,"font":"undefinedpx ","visible":true}},{"id":"7y40y","name":"문","script":"[]","objectType":"sprite","rotateMethod":"free","scene":"7dwq","sprite":{"pictures":[{"id":"vx80","dimension":{"width":640,"height":1280,"scaleX":0.07121076932483648,"scaleY":0.07121076932483648},"fileurl":"/lib/entry-js/images/../img/door.png","name":"엔트리봇_걷기1","scale":100,"imageType":"png"}],"sounds":[{"duration":1.3,"ext":".mp3","id":"8el5","fileurl":"/lib/entry-js/images/media/intro.mp3","name":"강아지 짖는소리"}]},"selectedPictureId":"vx80","lock":false,"entity":{"x":59.76,"y":9.85,"regX":320,"regY":640,"scaleX":0.07868615888387145,"scaleY":0.07868615888387145,"rotation":0,"direction":90,"width":640,"height":1280,"font":"undefinedpx ","visible":true}}],"scenes":[{"id":"7dwq","name":"장면 2"}],"variables":[{"name":"초시계","id":"bri2","visible":false,"value":0,"variableType":"timer","isCloud":false,"cloudDate":false,"object":null,"x":134,"y":-70},{"name":" 대답 ","id":"1vu2","visible":false,"value":"0","variableType":"answer","isCloud":false,"cloudDate":false,"object":null,"x":150,"y":-100}],"messages":[{"id":"3w51","name":"시작"},{"id":"6fe9","name":"밀기"}],"functions":[{"id":"hsq1","content":"[[{\"id\":\"x2mk\",\"x\":50,\"y\":30,\"type\":\"function_create\",\"params\":[{\"id\":\"wpw7\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\"밀기\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":false,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":false,\"emphasized\":false,\"readOnly\":null,\"copyable\":false,\"extensions\":[]},{\"id\":\"9vaf\",\"x\":0,\"y\":0,\"type\":\"move_xy_time\",\"params\":[{\"id\":\"7nfl\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"0.5\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"927q\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"30\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"4ey6\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"0\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"e7oz\",\"x\":0,\"y\":0,\"type\":\"_if2\",\"params\":[{\"id\":\"y5ki\",\"x\":0,\"y\":0,\"type\":\"reach_something\",\"params\":[null,\"7y0y1\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[[{\"id\":\"vvrj\",\"x\":0,\"y\":0,\"type\":\"message_cast\",\"params\":[\"6fe9\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"iq9x\",\"x\":0,\"y\":0,\"type\":\"wait_second\",\"params\":[{\"id\":\"1h57\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"0.5\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]"}],"speed":60,"interface":{"menuWidth":280,"canvasWidth":800,"object":"7y40y"},"expansionBlocks":[]}



var alone_stage2 = {"objects":[{"id":"7y0y","name":"아이","script":"[[{\"id\":\"wvw2\",\"x\":50,\"y\":30,\"type\":\"when_run_button_click\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"02ry\",\"x\":0,\"y\":0,\"type\":\"func_hsq1\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"8y73\",\"x\":0,\"y\":0,\"type\":\"func_hsq1\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"gqh5\",\"x\":0,\"y\":0,\"type\":\"func_hsq1\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"mplm\",\"x\":0,\"y\":0,\"type\":\"func_hsq1\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"ukus\",\"x\":0,\"y\":0,\"type\":\"func_hsq1\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"43a7\",\"x\":0,\"y\":0,\"type\":\"func_ilfg\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]","objectType":"sprite","rotateMethod":"free","scene":"7dwq","sprite":{"pictures":[{"id":"vx80","dimension":{"width":181,"height":362,"scaleX":0.3154574132492113,"scaleY":0.3154574132492113},"fileurl":"/lib/entry-jsimg/kid.png","name":"아이1","scale":100,"imageType":"png"}],"sounds":[{"duration":1.3,"ext":".mp3","id":"8el5","fileurl":"/lib/entry-js/images/media/intro.mp3","name":"인트로"}]},"selectedPictureId":"vx80","lock":true,"entity":{"x":120,"y":-24.8,"regX":90.5,"regY":181,"scaleX":0.2087023671668135,"scaleY":0.2087023671668135,"rotation":0,"direction":90,"width":181,"height":362,"font":"undefinedpx ","visible":true}},{"id":"7y41y","name":"계단","script":"[]","objectType":"sprite","rotateMethod":"free","scene":"7dwq","sprite":{"pictures":[{"id":"vx80","dimension":{"width":475,"height":475,"scaleX":0.21897121034592248,"scaleY":0.21897121034592248},"fileurl":"/lib/entry-js/images/../img/stairs1.png","name":"엔트리봇_걷기1","scale":100,"imageType":"png"}],"sounds":[{"duration":1.3,"ext":".mp3","id":"8el5","fileurl":"/lib/entry-js/images/media/intro.mp3","name":"강아지 짖는소리"}]},"selectedPictureId":"vx80","lock":true,"entity":{"x":-210.93,"y":-14.28,"regX":237.5,"regY":237.5,"scaleX":0.21897121034592248,"scaleY":0.21897121034592248,"rotation":0,"direction":90,"width":475,"height":475,"font":"undefinedpx ","visible":true}},{"id":"7y0y1","name":"박스","script":"[[{\"id\":\"ckfa\",\"x\":50,\"y\":30,\"type\":\"when_message_cast\",\"params\":[null,\"6fe9\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"9svt\",\"x\":0,\"y\":0,\"type\":\"move_xy_time\",\"params\":[{\"id\":\"fb8p\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"0.5\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"jywo\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"30\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"wzj6\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"0\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]","objectType":"sprite","rotateMethod":"free","scene":"7dwq","sprite":{"pictures":[{"id":"vx801","dimension":{"width":256,"height":256,"scaleX":0.3154574132492113,"scaleY":0.3154574132492113},"fileurl":"/lib/entry-js/images/object/box.png","name":"엔트리봇_걷기1","scale":100,"imageType":"png"}],"sounds":[{"duration":1.3,"ext":".mp3","id":"8e11","fileurl":"/lib/entry-js/images/media/bark.mp3","name":"강아지 짖는소리"}]},"selectedPictureId":"vx801","lock":true,"entity":{"x":178.55,"y":-36.49,"regX":128,"regY":128,"scaleX":0.24333856612072977,"scaleY":0.24333856612072977,"rotation":0,"direction":90,"width":256,"height":256,"font":"undefinedpx ","visible":true}},{"id":"7y40y","name":"문","script":"[]","objectType":"sprite","rotateMethod":"free","scene":"7dwq","sprite":{"pictures":[{"id":"vx80","dimension":{"width":640,"height":1280,"scaleX":0.07121076932483648,"scaleY":0.07121076932483648},"fileurl":"/lib/entry-js/images/../img/door.png","name":"엔트리봇_걷기1","scale":100,"imageType":"png"}],"sounds":[{"duration":1.3,"ext":".mp3","id":"8el5","fileurl":"/lib/entry-js/images/media/intro.mp3","name":"강아지 짖는소리"}]},"selectedPictureId":"vx80","lock":true,"entity":{"x":180.01,"y":9.19,"regX":320,"regY":640,"scaleX":0.07868615888387145,"scaleY":0.07868615888387145,"rotation":0,"direction":90,"width":640,"height":1280,"font":"undefinedpx ","visible":true}}],"scenes":[{"id":"7dwq","name":"장면 2"}],"variables":[{"name":"초시계","id":"bri2","visible":false,"value":0,"variableType":"timer","isCloud":false,"cloudDate":false,"object":null,"x":134,"y":-70},{"name":" 대답 ","id":"1vu2","visible":false,"value":"0","variableType":"answer","isCloud":false,"cloudDate":false,"object":null,"x":150,"y":-100}],"messages":[{"id":"3w51","name":"시작"},{"id":"6fe9","name":"밀기"}],"functions":[{"id":"hsq1","content":"[[{\"id\":\"x2mk\",\"x\":50,\"y\":30,\"type\":\"function_create\",\"params\":[{\"id\":\"wpw7\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\"계단 쪽으로 한 칸 이동하기\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":false,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":false,\"emphasized\":false,\"readOnly\":null,\"copyable\":false,\"extensions\":[]},{\"id\":\"9vaf\",\"x\":0,\"y\":0,\"type\":\"move_xy_time\",\"params\":[{\"id\":\"7nfl\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"0.5\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"927q\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"-30\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"4ey6\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"0\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"da6v\",\"x\":0,\"y\":0,\"type\":\"wait_second\",\"params\":[{\"id\":\"w1yh\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"0.005\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]"},{"id":"ilfg","content":"[[{\"id\":\"hwx8\",\"x\":50,\"y\":30,\"type\":\"function_create\",\"params\":[{\"id\":\"dh0s\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\"계단 올라가기\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":false,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":false,\"emphasized\":false,\"readOnly\":null,\"copyable\":false,\"extensions\":[]},{\"id\":\"cj9d\",\"x\":0,\"y\":0,\"type\":\"locate_xy_time\",\"params\":[{\"id\":\"i394\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"2\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"4w7w\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"-145\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"trlb\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"-24.8\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"c4sr\",\"x\":0,\"y\":0,\"type\":\"repeat_basic\",\"params\":[{\"id\":\"cpli\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"5\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[[{\"id\":\"nhvp\",\"x\":0,\"y\":0,\"type\":\"move_xy_time\",\"params\":[{\"id\":\"8ek5\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"0.2\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"2ofu\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"0\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"483d\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"14\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"rfoh\",\"x\":0,\"y\":0,\"type\":\"move_xy_time\",\"params\":[{\"id\":\"pnl5\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"0.2\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"a7fh\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"-18\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"rmqf\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"0\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"aned\",\"x\":0,\"y\":0,\"type\":\"move_xy_time\",\"params\":[{\"id\":\"d0zh\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"0.2\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"icfl\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"-30\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"dhkd\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"0\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]"}],"speed":60,"interface":{"menuWidth":280,"canvasWidth":800,"object":"7y0y"},"expansionBlocks":[]}








/*

var alone_stage99 = {"objects":[{"id":"7y0y","name":"아이","script":"[[{\"id\":\"gi0t\",\"x\":327,\"y\":102,\"type\":\"when_message_cast\",\"params\":[null,\"3w51\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"xxfb\",\"x\":0,\"y\":0,\"type\":\"func_hsq1\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"o64p\",\"x\":0,\"y\":0,\"type\":\"func_hsq1\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"0nc8\",\"x\":0,\"y\":0,\"type\":\"func_hsq1\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"l0ue\",\"x\":0,\"y\":0,\"type\":\"func_hsq1\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"5rnu\",\"x\":0,\"y\":0,\"type\":\"func_hsq1\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"gdn9\",\"x\":0,\"y\":0,\"type\":\"func_hsq1\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]","objectType":"sprite","rotateMethod":"free","scene":"7dwq","sprite":{"pictures":[{"id":"vx80","dimension":{"width":181,"height":362,"scaleX":0.3154574132492113,"scaleY":0.3154574132492113},"fileurl":"/lib/entry-jsimg/kid.png","name":"아이1","scale":100,"imageType":"png"}],"sounds":[{"duration":1.3,"ext":".mp3","id":"8el5","fileurl":"/lib/entry-js/images/media/intro.mp3","name":"인트로"}]},"selectedPictureId":"vx80","lock":false,"entity":{"x":-157.87,"y":-110.49,"regX":90.5,"regY":181,"scaleX":0.2087023671668135,"scaleY":0.2087023671668135,"rotation":0,"direction":90,"width":181,"height":362,"font":"undefinedpx ","visible":true}},{"id":"7y0y1","name":"박스","script":"[[{\"id\":\"ckfa\",\"x\":50,\"y\":30,\"type\":\"when_message_cast\",\"params\":[null,\"6fe9\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"9svt\",\"x\":0,\"y\":0,\"type\":\"move_xy_time\",\"params\":[{\"id\":\"fb8p\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"0.5\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"jywo\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"20\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"wzj6\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"10\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]","objectType":"sprite","rotateMethod":"free","scene":"7dwq","sprite":{"pictures":[{"id":"vx801","dimension":{"width":256,"height":256,"scaleX":0.3154574132492113,"scaleY":0.3154574132492113},"fileurl":"/lib/entry-js/images/object/box.png","name":"엔트리봇_걷기1","scale":100,"imageType":"png"}],"sounds":[{"duration":1.3,"ext":".mp3","id":"8e11","fileurl":"/lib/entry-js/images/media/bark.mp3","name":"강아지 짖는소리"}]},"selectedPictureId":"vx801","lock":false,"entity":{"x":-108.45,"y":-102.25,"regX":128,"regY":128,"scaleX":0.24333856612072977,"scaleY":0.24333856612072977,"rotation":0,"direction":90,"width":256,"height":256,"font":"undefinedpx ","visible":true}},{"id":"7y0y5","name":"문","script":"[[{\"id\":\"x7kf\",\"x\":124,\"y\":230,\"type\":\"when_message_cast\",\"params\":[null,\"3w51\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"91lf\",\"x\":0,\"y\":0,\"type\":\"repeat_inf\",\"params\":[null,null],\"statements\":[[{\"id\":\"rc5c\",\"x\":0,\"y\":0,\"type\":\"_if2\",\"params\":[{\"id\":\"5fqp\",\"x\":0,\"y\":0,\"type\":\"reach_something\",\"params\":[null,\"7y0y1\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[[{\"id\":\"gy1c\",\"x\":0,\"y\":0,\"type\":\"wait_second\",\"params\":[{\"id\":\"gsba\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"2.6\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"x18r\",\"x\":0,\"y\":0,\"type\":\"next_popup\",\"params\":[null,null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"xaf1\",\"x\":0,\"y\":0,\"type\":\"stop_object\",\"params\":[\"all\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]","objectType":"sprite","rotateMethod":"free","scene":"7dwq","sprite":{"pictures":[{"id":"vx805","dimension":{"width":203,"height":581,"scaleX":0.3154574132492113,"scaleY":0.3154574132492113},"fileurl":"/lib/entry-js/img/door2.png","name":"엔트리봇_걷기1","scale":100,"imageType":"png"}],"sounds":[{"duration":1.3,"ext":".mp3","id":"8el5","fileurl":"/lib/entry-js/images/media/bark.mp3","name":"강아지 짖는소리"}]},"selectedPictureId":"vx805","lock":false,"entity":{"x":-4.34,"y":4.77,"regX":95.69,"regY":292.42,"scaleX":0.20497425556547116,"scaleY":0.20497425556547125,"rotation":0,"direction":90,"width":203,"height":581,"font":"undefinedpx ","visible":true}},{"id":"kq24","name":"작은도둑","script":"[[{\"id\":\"p1nu\",\"x\":65,\"y\":45,\"type\":\"when_message_cast\",\"params\":[null,\"3w51\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"6hme\",\"x\":0,\"y\":0,\"type\":\"locate_xy_time\",\"params\":[{\"id\":\"n27w\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"10\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"7dol\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"-4\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"upj3\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"-8\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}],[{\"id\":\"83ot\",\"x\":441,\"y\":87,\"type\":\"when_run_button_click\",\"params\":[null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"lyxi\",\"x\":0,\"y\":0,\"type\":\"sound_something_with_block\",\"params\":[{\"id\":\"pkrq\",\"x\":0,\"y\":0,\"type\":\"get_sounds\",\"params\":[\"8el5\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"sxoo\",\"x\":0,\"y\":0,\"type\":\"wait_second\",\"params\":[{\"id\":\"1q1u\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"6\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"7h4x\",\"x\":0,\"y\":0,\"type\":\"message_cast\",\"params\":[\"3w51\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]","objectType":"sprite","rotateMethod":"free","scene":"7dwq","sprite":{"pictures":[{"id":"vx80","dimension":{"width":920,"height":920,"scaleX":0.3154574132492113,"scaleY":0.3154574132492113},"fileurl":"/lib/entry-js/images/object/thief2.png","name":"작은도둑1","scale":100,"imageType":"png"}],"sounds":[{"duration":1.3,"ext":".mp3","id":"8el5","fileurl":"/lib/entry-js/images/media/intro.mp3","name":"인트로"}]},"selectedPictureId":"vx80","lock":false,"entity":{"x":-232.2,"y":56.39,"regX":460,"regY":460,"scaleX":0.07089649857687981,"scaleY":0.07089649857687981,"rotation":0,"direction":90,"width":920,"height":920,"font":"undefinedpx ","visible":true}},{"id":"7y0y6","name":"도둑1","script":"[[{\"id\":\"o9cb\",\"x\":50,\"y\":30,\"type\":\"when_message_cast\",\"params\":[null,\"3w51\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"7zi9\",\"x\":0,\"y\":0,\"type\":\"locate_xy_time\",\"params\":[{\"id\":\"b5uh\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"10\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"l3ak\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"-4\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"nkls\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"-8\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]","objectType":"sprite","rotateMethod":"free","scene":"7dwq","sprite":{"pictures":[{"id":"vx806","dimension":{"width":552,"height":736,"scaleX":0.3154574132492113,"scaleY":0.3154574132492113},"fileurl":"/lib/entry-js/img/thief.png","name":"엔트리봇_걷기1","scale":100,"imageType":"png"}],"sounds":[{"duration":1.3,"ext":".mp3","id":"8el6","fileurl":"/lib/entry-js/images/media/bark.mp3","name":"강아지 짖는소리"}]},"selectedPictureId":"vx806","lock":false,"entity":{"x":207.65,"y":106.19,"regX":276,"regY":368,"scaleX":0.08590501265763555,"scaleY":0.08590501265763562,"rotation":0,"direction":90,"width":552,"height":736,"font":"undefinedpx ","visible":true}}],"scenes":[{"id":"7dwq","name":"장면 2"}],"variables":[{"name":"초시계","id":"bri2","visible":false,"value":0,"variableType":"timer","isCloud":false,"cloudDate":false,"object":null,"x":134,"y":-70},{"name":" 대답 ","id":"1vu2","visible":false,"value":"0","variableType":"answer","isCloud":false,"cloudDate":false,"object":null,"x":150,"y":-100}],"messages":[{"id":"3w51","name":"시작"},{"id":"6fe9","name":"밀기"}],"functions":[{"id":"hsq1","content":"[[{\"id\":\"x2mk\",\"x\":50,\"y\":30,\"type\":\"function_create\",\"params\":[{\"id\":\"wpw7\",\"x\":0,\"y\":0,\"type\":\"function_field_label\",\"params\":[\"밀기\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":false,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":false,\"emphasized\":false,\"readOnly\":null,\"copyable\":false,\"extensions\":[]},{\"id\":\"9vaf\",\"x\":0,\"y\":0,\"type\":\"move_xy_time\",\"params\":[{\"id\":\"7nfl\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"0.5\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"d14v\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"20\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"4ey6\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"10\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"e7oz\",\"x\":0,\"y\":0,\"type\":\"_if2\",\"params\":[{\"id\":\"y5ki\",\"x\":0,\"y\":0,\"type\":\"reach_something\",\"params\":[null,\"7y0y1\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[[{\"id\":\"vvrj\",\"x\":0,\"y\":0,\"type\":\"message_cast\",\"params\":[\"6fe9\",null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},{\"id\":\"iq9x\",\"x\":0,\"y\":0,\"type\":\"wait_second\",\"params\":[{\"id\":\"1h57\",\"x\":0,\"y\":0,\"type\":\"number\",\"params\":[\"0.5\"],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]},null],\"statements\":[],\"movable\":null,\"deletable\":1,\"emphasized\":false,\"readOnly\":null,\"copyable\":true,\"extensions\":[]}]]"}],"speed":60,"interface":{"menuWidth":308,"canvasWidth":800,"object":"7y0y5"},"expansionBlocks":[]}
*/