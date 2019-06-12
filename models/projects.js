const db = require('./conn.js');

class Projects {
    contructor(id, name, description, github_repo, cohort_id, url) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.github_repo = github_repo;
        this.cohort_id = cohort_id;
        this.url = url;
        this.added_date = new Date();
    }

    static async getAllProjects() {
        try {
            const response = await db.any(`select * from projects`);
            console.log("response:", response)
            return response;
        } catch(err) {
            return err.message
        }
    }

    static async getProjectData(project_id) {
        try {
            const response = await db.one(`
            select * from projects 
            where id = $1
            `, [project_id]);
            return response;
        } catch(err) {
            return err.message;
        }
    }

    static async addProject(name, description, github_repo, cohort_id, url) {
        try {
            const date = new Date()
            const response = await db.one(`insert into projects (name, description, github_repo, cohort_id, url, added_date) values
                            ($1, $2, $3, $4, $5, $6) returning id`, [name, description, github_repo, cohort_id, url, date]);
            console.log("Project created with id:". response.id);
            return response
        } catch(err) {
            return err.message
        }
    }
}

module.exports = Projects;

