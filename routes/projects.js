const express = require('express'),
    router = express.Router();

const ProjectsController = require('../controllers/projects');

router.get('/', ProjectsController.projects_list_get);
router.get('/:project_id', ProjectsController.project_data_get);
router.post('/', ProjectsController.project_post);


module.exports = router;