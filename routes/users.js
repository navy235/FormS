var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',function(req, res, next){
    var email=req.body.email;
    console.log(email);
    if(email=='123@qq.com'){
        res.send(false);
    }else{
        res.send(true);
    }
})

module.exports = router;
