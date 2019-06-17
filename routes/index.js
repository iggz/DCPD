const express = require('express'),
    router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('template', {
        locals: {
            title: 'Digitalcrafts Project Database',
            is_logged_in: req.session.is_logged_in,
            // userName: req.session.first_name 
        },
        partials: {
            partial: 'partial-index'
        }
    });
});

module.exports = router;
