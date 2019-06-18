const pgp = require('pg-promise') ({
    /*query: e => {
        console.log('QUERY:', e.query);
    }*/
})

const options = {
    host: 'localhost',
    database: 'dcpd',
    user: 'dcpdadmin',
    password: 'Empire75'
}

const db = pgp(options);

module.exports = db;