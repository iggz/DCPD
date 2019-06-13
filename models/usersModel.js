const db = require('./conn');

class User {
    constructor(user_id, first_name, last_name, user_email, cohort_id) {
        this.id = user_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = user_email;
        this.cohort_id = cohort_id;
    }

    async save() {
        try {
            const response = await db.one(`
                insert into users
                    (first_name, last_name, user_email, cohort_id)
                values
                    ($1, $2, $3, $4)
                returning id
                ` , [this.first_name, this.last_name, this.email, this.cohort_id]);
            return response;
        } catch(err) {
            return err.message;
        }
    }

    async addNewUser(email) {
        try {
            //check to see if user already in database
            const check = await db.one(`
                select * from users
                where users.email = $1
            ` , [email]);
            //if check is empty
            if (!check) {
                //add new user to database
                const response = await db.one(`
                    insert into users
                        (first_name, last_name, user_email, cohort_id)
                    values
                        ($1, $2, $3, $4)
                    returning user_id
                    ` , [this.first_name, this.last_name, this.email, this.cohort_id]);
                return response;
            }   
        } catch(err) {
            return err.message;
        }
    }
    async getProfile() {
        try {
            const response = await db.one(`
                select first_name, last_name, user_email, cohort_name
                    from users
                inner join cohorts
                    on users.cohort_id = cohorts.cohort_id
                where users.user_email = $1`, [this.email]);
            console.log(response);
            const { first_name, last_name, user_email, cohort_name } = response;
            return { first_name, last_name, user_email, cohort_name };
        } catch(err) {
            return err.message;
        }
    }
    async checkProfile() {
        try {
            const response = await db.one(`
                select * from users
                where users.user_email = $1`, [this.email]);
            const { user_id, first_name, last_name, user_email, cohort_id } = response;
            return { user_id, first_name, last_name, user_email, cohort_id };
        } catch(err) {
            return err.message;
        }
    }
}

module.exports = User;