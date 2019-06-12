const express = require('express'),
  request = require('request');
  router = express.Router();

require('dotenv').config();

/* GET oauth token and user info. */
router.get('/auth/slack', function(req, res) {
  request.get(`https://slack.com/api/oauth.access?client_id=${process.env['CLIENT_ID']}&client_secret=${process.env['CLIENT_SECRET']}&code=${req.query.code}`, function (error, response, body) {
    const data = JSON.parse(body);
    console.log(data);
    console.log(data.access_token);
    return data;
  })
});

module.exports = router;
