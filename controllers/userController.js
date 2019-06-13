const Users = require('../models/usersModel');
const Projects = require('../models/projects');

exports.profile_get = async (req, res) => {
    const email = req.session.email;
    const userInstance = new Users(null, null, null, email);
    const userData = await userInstance.getProfile();
    res.render('template', {
        locals: {
            title: 'User Profile',
            userData: userData,
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            partial: 'partial-profile'
        }
    });
}

exports.signup_get = async (req, res) => {
    const cohortsList = await Projects.getCohorts();
    res.render('template', {
        locals: {
            title: 'User Signup',
            allCohorts: cohortsList,
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            partial: 'partial-signup'
        }
    });
}

exports.signup_post = (req, res) => {
    const { first_name, last_name, email, cohort_id } = req.body;

    //create new user instance, with sign up info
    const userInstance = new Users(null, first_name, last_name, email, cohort_id);

    userInstance.save().then(() => {
        res.redirect('/');
    });
}

exports.logout_get = (req, res) => {
    req.session.destroy();
    res.redirect('/');
}