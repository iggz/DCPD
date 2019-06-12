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

exports.project_data_get = async (req,res) => {
    const projectData = await Projects.getProjectData(req.params.project_id);
    console.log("projectData: ", projectData);
    res.render('template', {
        locals: {
            title: 'Projects Data',
            oneProject: projectData
        },
        partials: {
            partial: 'partial-one-project'
        }
    });
}
