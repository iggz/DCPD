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
}

module.exports = Projects;

