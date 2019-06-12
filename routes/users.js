const express = require('express'),
  request = require('request');
  router = express.Router();

require('dotenv').config();

/* GET users listing. */
router.get('/auth/slack', function(req, res) {
  request.get(`https://slack.com/api/oauth.access?client_id=${process.env['CLIENT_ID']}&client_secret=${process.env['CLIENT_SECRET']}&code=${req.query.code}`, function (error, response, body) {
    console.log(response.statusCode);
    console.log('this is the body!!!', body);
  })
});

module.exports = router;
