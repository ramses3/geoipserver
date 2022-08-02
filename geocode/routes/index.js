var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Simple Geoip Resolver' });
});

var geoip = require('geoip-country');

router.get('/ip/:ip', async (req, res, next) => {
  try{
      var geo = geoip.lookup(req.params.ip);
      if (geo == null) {
        res.send('{"range":[134609920,134874623],"country":"US"}');
      }
      else {
        res.send(geo);
      }
      
  } catch(err){
      console.error('Failed to return content', err);
  }
});

module.exports = router;