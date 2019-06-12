const Projects = require('../models/projects');

exports.projects_list_get = async (req, res) => {
    const projectsList = await Projects.getAllProjects();
    const cohortsList = await Projects.getCohorts();
    res.render('template', {
        locals: {
            title: 'Projects List',
            allProjects: projectsList,
            allCohorts: cohortsList
        },
        partials: {
            partial: 'partial-projects'
        }
    });
}

exports.project_data_get = async (req,res) => {
    const projectData = await Projects.getProjectData(req.params.project_id);
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

exports.project_post = async (req, res) => {
    const name = req.body.name,
        description = req.body.description,
        github_repo = req.body.github_repo,
        cohort_id = req.body.cohort_id,
        url = req.body.url;
    await Projects.addProject(name, description, github_repo, cohort_id, url)
    res.redirect('/projects');
}