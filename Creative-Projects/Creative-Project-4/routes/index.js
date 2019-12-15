var express = require('express');
var router = express.Router();
var fs = require('fs');
var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {
res.sendFile('index.html', { root:  'public' });
    
});

router.get('/getrestaurants',function(req,res,next) {
    var cities = 0;
    var jsonresult = [];
    var nothing = false;

    if(req.query.q === undefined){
      nothing = true;
    }
    
    fs.readFile(__dirname + '/restaurants.txt',function(err,data) {
      if(err) throw err;
      restaurants = data.toString().split("\n");

      if(nothing){
        for(var i = 0; i < restaurants.length; i++) {
          jsonresult.push({restaurant:restaurants[i]});
        }
        res.status(200).json(jsonresult);
        return;
      }
      
      var myRe = new RegExp("^" + req.query.q);
      var j = 0; 
      // console.log(restaurants.length);

      while(true){
        if (j === restaurants.length){
          result = "not found";
          break;
        }
        var result = restaurants[j].search(myRe);
        // console.log(result);

        if (result != -1){
          result = restaurants[j];
          // console.log(result);
          break;
        }
        j++;
      }

      switch(result) {
        case "American":
            fs.readFile(__dirname + '/american.txt',function(err,data) {
              if(err) throw err;
              places = data.toString().split("\n");
              for(var i = 0; i < places.length; i++) {
                jsonresult.push({restaurant:places[i]});
              }
              // console.log(jsonresult);
              res.status(200).json(jsonresult);
            });
            
          break;
        case "Asian":
          fs.readFile(__dirname + '/asian.txt',function(err,data) {
            if(err) throw err;
            places = data.toString().split("\n");
            for(var i = 0; i < places.length; i++) {
              jsonresult.push({restaurant:places[i]});
            }
            // console.log(jsonresult);
            res.status(200).json(jsonresult);
          });
          break;
        case "Breakfast":
          fs.readFile(__dirname + '/breakfast.txt',function(err,data) {
            if(err) throw err;
            places = data.toString().split("\n");
            for(var i = 0; i < places.length; i++) {
              jsonresult.push({restaurant:places[i]});
            }
            // console.log(jsonresult);
            res.status(200).json(jsonresult);
          });
          break;
        case "Desserts":
          fs.readFile(__dirname + '/desserts.txt',function(err,data) {
            if(err) throw err;
            places = data.toString().split("\n");
            for(var i = 0; i < places.length; i++) {
              jsonresult.push({restaurant:places[i]});
            }
            // console.log(jsonresult);
            res.status(200).json(jsonresult);
          });
          break;
        case "Fusion":
          fs.readFile(__dirname + '/fusion.txt',function(err,data) {
            if(err) throw err;
            places = data.toString().split("\n");
            for(var i = 0; i < places.length; i++) {
              jsonresult.push({restaurant:places[i]});
            }
            // console.log(jsonresult);
            res.status(200).json(jsonresult);
          });
          break;
        case "Hawaiian":
          fs.readFile(__dirname + '/hawaiian.txt',function(err,data) {
            if(err) throw err;
            places = data.toString().split("\n");
            for(var i = 0; i < places.length; i++) {
              jsonresult.push({restaurant:places[i]});
            }
            // console.log(jsonresult);
            res.status(200).json(jsonresult);
          });
          break;
        case "Indian":
          fs.readFile(__dirname + '/indian.txt',function(err,data) {
            if(err) throw err;
            places = data.toString().split("\n");
            for(var i = 0; i < places.length; i++) {
              jsonresult.push({restaurant:places[i]});
            }
            // console.log(jsonresult);
            res.status(200).json(jsonresult);
          });
          break;
        case "Italian":
          fs.readFile(__dirname + '/italian.txt',function(err,data) {
            if(err) throw err;
            places = data.toString().split("\n");
            for(var i = 0; i < places.length; i++) {
              jsonresult.push({restaurant:places[i]});
            }
            // console.log(jsonresult);
            res.status(200).json(jsonresult);
          });
          break;
        case "Japanese":
          fs.readFile(__dirname + '/japanese.txt',function(err,data) {
            if(err) throw err;
            places = data.toString().split("\n");
            for(var i = 0; i < places.length; i++) {
              jsonresult.push({restaurant:places[i]});
            }
            // console.log(jsonresult);
            res.status(200).json(jsonresult);
          });
          break;
        case "Latin American":
          fs.readFile(__dirname + '/latin.txt',function(err,data) {
            if(err) throw err;
            places = data.toString().split("\n");
            for(var i = 0; i < places.length; i++) {
              jsonresult.push({restaurant:places[i]});
            }
            // console.log(jsonresult);
            res.status(200).json(jsonresult);
          });
          break;
        case "Mediterranean":
          fs.readFile(__dirname + '/mediterranean.txt',function(err,data) {
            if(err) throw err;
            places = data.toString().split("\n");
            for(var i = 0; i < places.length; i++) {
              jsonresult.push({restaurant:places[i]});
            }
            // console.log(jsonresult);
            res.status(200).json(jsonresult);
          });
          break;
        case "Mexican":
            fs.readFile(__dirname + '/mexican.txt',function(err,data) {
              if(err) throw err;
              places = data.toString().split("\n");
              for(var i = 0; i < places.length; i++) {
                jsonresult.push({restaurant:places[i]});
              }
              // console.log(jsonresult);
              res.status(200).json(jsonresult);
            });
          break;
        case "Pizza":
          fs.readFile(__dirname + '/pizza.txt',function(err,data) {
            if(err) throw err;
            places = data.toString().split("\n");
            for(var i = 0; i < places.length; i++) {
              jsonresult.push({restaurant:places[i]});
            }
            // console.log(jsonresult);
            res.status(200).json(jsonresult);
          });
          break;
        case "Sandwiches":
          fs.readFile(__dirname + '/sandwiches.txt',function(err,data) {
            if(err) throw err;
            places = data.toString().split("\n");
            for(var i = 0; i < places.length; i++) {
              jsonresult.push({restaurant:places[i]});
            }
            // console.log(jsonresult);
            res.status(200).json(jsonresult);
          });
          break;
        case "Thai":
          fs.readFile(__dirname + '/thai.txt',function(err,data) {
            if(err) throw err;
            places = data.toString().split("\n");
            for(var i = 0; i < places.length; i++) {
              jsonresult.push({restaurant:places[i]});
            }
            // console.log(jsonresult);
            res.status(200).json(jsonresult);
          });
          break;
        case "Other":
          fs.readFile(__dirname + '/other.txt',function(err,data) {
            if(err) throw err;
            places = data.toString().split("\n");
            for(var i = 0; i < places.length; i++) {
              jsonresult.push({restaurant:places[i]});
            }
            // console.log(jsonresult);
            res.status(200).json(jsonresult);
          });
          break;         
        default:
            for(var i = 0; i < restaurants.length; i++) {
              jsonresult.push({restaurant:restaurants[i]});
            }
            res.status(200).json(jsonresult);
      }
      
        // console.log("json" + jsonresult);
    });
  });


module.exports = router;
