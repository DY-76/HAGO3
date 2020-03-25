export var box;


export function objectadd(name){
    switch(name) {

        case 'box':
            
            Entry.Utils.addNewObject(JSON.parse(JSON.stringify(box)));
            break;
        case 'testman':
            Entry.Utils.addNewObject(JSON.parse(JSON.stringify(testman)));
            break;
        case 'pikachu':
            Entry.Utils.addNewObject(JSON.parse(JSON.stringify(pikachu)));
            break;
        default:
            return JSON.stringify(box);
    }
}

/* export function boxadd() {
    var test = JSON.stringify(box);
    var addobject = JSON.parse(test);
    Entry.Utils.addNewObject(addobject);
}*/



var box={"objects":[{"id":"7y0y","name":"엔트리봇","script":"[[]]","objectType":"sprite","rotateMethod":"free","scene":"7dwq","sprite":{"pictures":[{"id":"vx80","dimension":{"width":256,"height":256},"fileurl":"/lib/entry-js/images/object/box.png","name":"엔트리봇_걷기1","scale":100,"imageType":"png"}],"sounds":[{"duration":1.3,"ext":".mp3","id":"8el5","fileurl":"/lib/entry-js/images/media/bark.mp3","name":"강아지 짖는소리"}]},"selectedPictureId":"vx80","lock":false,"entity":{"x":0,"y":0,"regX":128,"regY":128,"scaleX":0.3154574132492113,"scaleY":0.3154574132492113,"rotation":0,"direction":90,"width":256,"height":256,"font":"undefinedpx ","visible":true}}],"scenes":[{"id":"7dwq","name":"장면 "}],"variables":[{"name":"초시계","id":"brih","visible":false,"value":"0","variableType":"timer","isCloud":false,"cloudDate":false,"object":null,"x":134,"y":-70},{"name":" 대답 ","id":"1vu8","visible":false,"value":"0","variableType":"answer","isCloud":false,"cloudDate":false,"object":null,"x":150,"y":-100}],"messages":[],"functions":[],"speed":60,"interface":{"menuWidth":308,"canvasWidth":800,"object":"7y0y"},"expansionBlocks":[]}
var testman={"objects":[{"id":"7y0y","name":"엔트리봇","script":"[[]]","objectType":"sprite","rotateMethod":"free","scene":"7dwq","sprite":{"pictures":[{"id":"vx80","dimension":{"width":504,"height":284},"fileurl":"/lib/entry-js/images/object/testman.png","name":"엔트리봇_걷기1","scale":100,"imageType":"png"}],"sounds":[{"duration":1.3,"ext":".mp3","id":"8el5","fileurl":"/lib/entry-js/images/media/bark.mp3","name":"강아지 짖는소리"}]},"selectedPictureId":"vx80","lock":false,"entity":{"x":0,"y":0,"regX":252,"regY":142,"scaleX":0.3154574132492113,"scaleY":0.3154574132492113,"rotation":0,"direction":90,"width":504,"height":284,"font":"undefinedpx ","visible":true}}],"scenes":[{"id":"7dwq","name":"장면 "}],"variables":[{"name":"초시계","id":"brih","visible":false,"value":"0","variableType":"timer","isCloud":false,"cloudDate":false,"object":null,"x":134,"y":-70},{"name":" 대답 ","id":"1vu8","visible":false,"value":"0","variableType":"answer","isCloud":false,"cloudDate":false,"object":null,"x":150,"y":-100}],"messages":[],"functions":[],"speed":60,"interface":{"menuWidth":308,"canvasWidth":800,"object":"7y0y"},"expansionBlocks":[]}
var pikachu={"objects":[{"id":"7y0y","name":"엔트리봇","script":"[[]]","objectType":"sprite","rotateMethod":"free","scene":"7dwq","sprite":{"pictures":[{"id":"vx80","dimension":{"width":800,"height":800},"fileurl":"/lib/entry-js/images/object/pikachu.gif","name":"엔트리봇_걷기1","scale":100,"imageType":"gif"}],"sounds":[{"duration":1.3,"ext":".mp3","id":"8el5","fileurl":"/lib/entry-js/images/media/bark.mp3","name":"강아지 짖는소리"}]},"selectedPictureId":"vx80","lock":false,"entity":{"x":0,"y":0,"regX":400,"regY":400,"scaleX":0.3154574132492113,"scaleY":0.3154574132492113,"rotation":0,"direction":90,"width":800,"height":800,"font":"undefinedpx ","visible":true}}],"scenes":[{"id":"7dwq","name":"장면 "}],"variables":[{"name":"초시계","id":"brih","visible":false,"value":"0","variableType":"timer","isCloud":false,"cloudDate":false,"object":null,"x":134,"y":-70},{"name":" 대답 ","id":"1vu8","visible":false,"value":"0","variableType":"answer","isCloud":false,"cloudDate":false,"object":null,"x":150,"y":-100}],"messages":[],"functions":[],"speed":60,"interface":{"menuWidth":308,"canvasWidth":800,"object":"7y0y"},"expansionBlocks":[]}