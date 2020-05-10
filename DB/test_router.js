var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
  });

  router.get('', function(req, res) {
    res.render( 'test' , {DBdata:'Done!',
                         All:'test'
                        });

});