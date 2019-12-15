var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {
res.sendFile('index.html', { root:  'public' });
    
});

router.get('/getcity',function(req,res,next) {
    var cities = 0;
    
    fs.readFile(__dirname + '/cities.dat.txt',function(err,data) {
      if(err) throw err;
      cities = data.toString().split("\n");
      
      var myRe = new RegExp("^" + req.query.q);

        var jsonresult = [];
        for(var i = 0; i < cities.length; i++) {
          var result = cities[i].search(myRe); 
          if(result != -1) {
            jsonresult.push({city:cities[i]});
          } 
        }   
        // console.log("json" + jsonresult);
            res.status(200).json(jsonresult);
    });
  });
  
  
  
  
router.get('/getOwl', function(req,res){
    // console.log("in get owl");
     var url = "https://owlbot.info/api/v1/dictionary/";
    url = url + req.query.q;
    console.log(url);
    request(url).pipe(res);

});





module.exports = router;
