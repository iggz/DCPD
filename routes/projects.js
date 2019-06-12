const express = require('express'),
    router = express.Router();

const ProjectsController = require('../controllers/projects');

router.get('/', ProjectsController.projects_list_get);
router.get('/:project_id([0-9]+)', ProjectsController.project_data_get);
router.get('/submit', ProjectsController.add_project_page);
router.post('/submit', ProjectsController.project_post);
router.post('/', ProjectsController.project_post);

module.exports = router;