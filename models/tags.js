const db = require('./conn.js');

class Tags {
    static async addTags(tagsList, project_id) {
        //#javascript #node #express #postgresql
        // console.log("tags list:", tagsList)
        let tags = tagsList.split('#');
        let trimTags = tags.map(tag=> tag.trim());
        trimTags.shift()
        let lowerTags = trimTags.map(tag=> tag.toLowerCase())
        // console.log(lowerTags)
        lowerTags.map(tag => {
            try {
                const response = db.any(`insert into tags (tag_text, project_id) values ('${tag}', ${project_id})`)
                return response
            } catch(err) {
                return err.message
            }
        })
    }

    static async getAllTags() {
        try {
            const response = db.any(`select tag_text, count(tag_text) from tags group by tag_text order by count desc`)
            return response
        } catch(err) {
            return err.message
        }
    }

    static async getProjectsWithTags() {
        try {
            const response = await db.any(`select p.project_id, string_agg(t.tag_text, ',') AS tags_list
            from projects as p
                left join tags as t on p.project_id = t.project_id
            group by p.project_id;`);
            // console.log("project tags:", response);
            return response
        } catch(err) {
            return err.message
        }
    }

    static async getSingleProjectTags(project_id) {
        try {
            const response = await db.any(`select p.project_id, string_agg(t.tag_text, ',') AS tags_list
            from projects as p
                left join tags as t on p.project_id = t.project_id
            group by p.project_id
            where p.project_id = $1;`, [project_id]);
            // console.log("project tags:", response);
            return response
        } catch(err) {
            return err.message
        }
    }
}

module.exports = Tags;