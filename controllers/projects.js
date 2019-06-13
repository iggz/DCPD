const Projects = require('../models/projects');

exports.projects_list_get = async (req, res) => {
    const projectsList = await Projects.getAllProjects();
    const cohortsList = await Projects.getCohorts();
    res.render('template', {
        locals: {
            title: 'Projects List',
            is_logged_in: req.session.is_logged_in,
            allProjects: projectsList,
            allCohorts: cohortsList
        },
        partials: {
            partial: 'partial-projects'
        }
    });
}

exports.projects_list_get_by_cohort = async (req, res) => {
    const projectsList = await Projects.getProjectsByCohort(req.body.cohort_id)
    const cohortsList = await Projects.getCohorts();
    res.render('template', {
        locals: {
            title: 'Projects List',
            is_logged_in: req.session.is_logged_in,
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
            is_logged_in: req.session.is_logged_in,
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
        tags = req.body.tags;
    let response = await Projects.addProject(name, description, github_repo, cohort_id, url)
    await Projects.addTags(tags, response.project_id)
    res.redirect('/projects');
}

exports.add_project_page = async (req, res) => {
    const cohortsList = await Projects.getCohorts();
    res.render('template', {
        locals: {
            title: 'Submit a Project',
            is_logged_in: req.session.is_logged_in,
            allCohorts: cohortsList
        },
        partials: {
            partial: 'partial-add-project'
        }
    })
}