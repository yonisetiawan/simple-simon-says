var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/colors', function(req, res, next) {
  var color1 = Math.floor(Math.random()*256)
  var color2 = Math.floor(Math.random()*256)
  var color3 = Math.floor(Math.random()*256)
  var randomIndex = Math.ceil(Math.random()*9)
  var fullColor = `rgb(${color1}, ${color2}, ${color3})`

  res.send({
    randomBox: randomIndex,
    bgColor: fullColor
  })


});



module.exports = router;
