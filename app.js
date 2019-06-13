const express = require('express'),
    session = require('express-session'),
    //FileStore = require('session-file-store')(session),
    es6Renderer = require('express-es6-template-engine'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan');

const indexRouter = require('./routes/index'),
    usersRouter = require('./routes/users');
    projectsRouter = require('./routes/projects')


const app = express();

require('dotenv').config();

//App setup
app.set('views', 'views');
app.engine('html', es6Renderer);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    //store: new FileStore(),
    secret: process.env['SESSION_SECRET'],
    resave: false,
    saveUninitialized: true, 
    is_logged_in: false
}));

app.use(require('body-parser').urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/projects', projectsRouter);

module.exports = app;
