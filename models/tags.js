const db = require('./conn.js');

class Tags {
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

    static async getAllTags() {
        try {
            const response = db.any(`select tag_text, count(tag_text) from tags group by tag_text order by count desc`)
            return response
        } catch(err) {
            return err.message
        }
    }
}

module.exports = Tags;