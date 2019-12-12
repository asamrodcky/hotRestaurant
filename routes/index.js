var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile(path.join(__dirname + "/../public/html/index.html"));
});

router.get('/reservations', function(req, res, next) {
  res.sendfile(path.join(__dirname + "/../public/html/makeRes.html"));
});

router.get('/tables', function(req, res, next) {
  res.sendfile(path.join(__dirname + "/../public/html/tables.html"));
});

module.exports = router;
