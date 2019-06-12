const Projects = require('../models/projects');

exports.projects_list_get = async (req, res) => {
    const projectsList = await Projects.getAllProjects();
    console.log("projectsList:", projectsList);
    res.render('template', {
        locals: {
            title: 'Projects List',
            allProjects: projectsList
        },
        partials: {
            partial: 'partial-projects'
        }
    });
}