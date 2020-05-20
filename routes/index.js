var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET psehome page. */
router.get('/pse_index', function(req, res, next) {
  res.render('pse_index', { title: 'Express' });
});

/* GET atlibhome page. */
router.get('/atlib_index', function(req, res, next) {
  res.render('atlib_index', { title: 'Express' });
});
module.exports = router;
