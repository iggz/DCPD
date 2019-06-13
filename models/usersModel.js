const db = require('./conn');

class User {
    constructor(id, first_name, last_name, email) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
    }

    async save() {
        try {
            const response = await db.one(`
                insert into users
                    (first_name, last_name, email, password)
                values
                    ($1, $2, $3, $4)
                returning id
                ` , [this.first_name, this.last_name, this.email, this.password]);
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
                        (first_name, last_name, email)
                    values
                        ($1, $2, $3)
                    returning id
                    ` , [this.first_name, this.last_name, this.email, this.password]);
                return response;
            }   
        } catch(err) {
            return err.message;
        }
    }
    async getProfile() {
        try {
            const response = await db.one(`
                select first_name, last_name, email
                    from users
                where users.id = $1`, [this.id]);
            const { first_name, last_name, email } = response;
            return { first_name, last_name, email };
        } catch(err) {
            return err.message;
        }
    }
    async checkProfile() {
        try {
            const response = await db.one(`
                select * from users
                where users.email = $1`, [this.email]);
            const { first_name, last_name, email, password } = response;
            return {first_name, last_name, email, password};
        } catch(err) {
            return err.message;
        }
    }
}

module.exports = User;