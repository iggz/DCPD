const db = require('./conn.js');

class Projects {
    contructor(project_id, project_name, project_description, github_repo, cohort_id, project_url) {
        this.project_id = project_id;
        this.project_name = project_name;
        this.project_description = project_description;
        this.github_repo = github_repo;
        this.cohort_id = cohort_id;
        this.project_url = project_url;
        this.added_date = new Date();
    }

    static async getAllProjects() {
        try {
            const response = await db.any(`select p.*, c.cohort_name from projects as p join cohorts as c on p.cohort_id = c.cohort_id order by p.project_id desc`);
            // console.log("response:", response)
            return response;
        } catch(err) {
            return err.message
        }
    }

    static async getMyProjects(email) {
        try {
            const user_id = await db.one(`select user_id from users where users.user_email = $1`, [email]);
            const response = await db.any(`
                select projects.project_id, project_name, project_description, github_repo, project_url, added_date  
                    from projects, project_users
                where project_users.user_id = $1 and projects.project_id = project_users.project_id;
            `, [user_id.user_id]);
            return response;
        } catch(err) {
            return err.message
        }
    }

    static async getProjectData(project_id) {
        try {
            const response = await db.one(`
            select * from projects 
            where project_id = $1
            `, [project_id]);
            return response;
        } catch(err) {
            return err.message;
        }
    }

    static async addProject(project_name, project_description, github_repo, cohort_id, project_url) {
        try {
            const date = new Date()
            const response = await db.one(`insert into projects (project_name, project_description, github_repo, cohort_id, project_url, added_date) values
                            ($1, $2, $3, $4, $5, $6) returning project_id`, [project_name, project_description, github_repo, cohort_id, project_url, date]);
            console.log("Project created with id:", response.project_id);
            return response
        } catch(err) {
            return err.message
        }
    }

    static async addTags(tagsList, project_id) {
        //#javascript #node #express #postgresql
        console.log("tags list:", tagsList)
        let tags = tagsList.split('#');
        let trimTags = tags.map(tag=> tag.trim());
        trimTags.shift()
        let lowerTags = trimTags.map(tag=> tag.toLowerCase())
        console.log(lowerTags)
        lowerTags.map(tag => {
            try {
                const response = db.any(`insert into tags (tag_text, project_id) values ('${tag}', ${project_id})`)
                return response
            } catch(err) {
                return err.message
            }
        })
    }

    static async getCohorts() {
        try {
            const response = await db.any(`select * from cohorts`);
            return response
        } catch {
            return err.message
        }
    }

    static async getProjectsByCohort(cohort_id) {
        try {
            const response = (cohort_id === "all") ? await db.any(`select p.*, c.cohort_name from projects as p join cohorts as c on p.cohort_id = c.cohort_id order by p.project_id desc`)
            : await db.any(`select p.*, c.cohort_name from projects as p join cohorts as c on p.cohort_id = c.cohort_id where p.cohort_id = ${cohort_id} order by p.project_id desc`)
            return response
        } catch(err) {
            return err.message
        }
    }

    static async editProject(p_id, project_name, project_description, github_repo, project_url) {
        try {
            const response = await db.one(`
                update projects
                set 
                    project_name = $1,
                    project_description = $2,
                    github_repo = $3,
                    project_url = $4
                where
                    project_id = ${p_id}
            `, [project_name, project_description, github_repo, project_url]);
            return response;
        } catch (err) {
            return err.message
        }
    }

    static async getProjectUsers(p_id) {
        try {
            const response = await db.any(`
                select * from project_users
                where project_users.project_id = ${p_id}
            `);
            return response;
        } catch(err) {
            return err.message
        }
    };

    static async checkUser(email) {
        try {
            const response = await db.one(`
                select user_id from users
                where users.user_email = ${email}
            `);
        } catch(err) {
            return err.message
        }
    }
}

module.exports = Projects;

