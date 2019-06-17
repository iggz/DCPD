const express = require('express'),
  request = require('request');
  router = express.Router();
  userController = require('../controllers/userController');
  User = require('../models/usersModel');

require('dotenv').config();

/* GET oauth token and user info. */
router.get('/auth/slack', async (req, res) => {
  request.get(`https://slack.com/api/oauth.access?client_id=${process.env['CLIENT_ID']}&client_secret=${process.env['CLIENT_SECRET']}&code=${req.query.code}`, async (error, response, body) => {
    const data = await JSON.parse(body);
    const team_id = data.team.id;
    //if user is member of slack team, set session variables
    //then check to see if they are already in database
    if(team_id == process.env['TEAM_ID']) {
      req.session.email = data.user.email;
      req.session.bearer = data.access_token;
      req.session.status = data.ok;
      req.session.is_logged_in = true;
      const user = new User(null, null, null, req.session.email);
      userCheck = await user.checkProfile();
      if(userCheck.first_name == null) {
        res.redirect('/users/signup');
      }
      else {
        res.redirect('/');
      }
    } else {
    res.redirect('/');
    }
  })
});

router.get('/signup', userController.signup_get);

router.post('/signup', userController.signup_post);

router.get('/profile', userController.profile_get);

router.get('/logout', userController.logout_get);

module.exports = router;
