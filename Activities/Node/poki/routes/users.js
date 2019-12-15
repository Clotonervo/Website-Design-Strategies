var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/pokemon', function(req, res) {
  console.log("In Pokemon");
});

module.exports = router;
