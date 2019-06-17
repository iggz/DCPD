const chai = require("chai"),
    expect = chai.expect,
    chaiAsPromised = require("chai-as-promised")

chai.use(chaiAsPromised).should();

const Projects = require('../models/projects');

describe('Projects model tests', () => {
    it('should be a valid project object', async () => {
        const project = await Projects.getProjectData(1);
        console.log('project:', project)
        expect(project).to.be.an('object')
    })

    it('should get more than zero projects', async () => {
        const projects = await Projects.getAllProjects();
        expect(projects.length).to.be.greaterThan(0);
    })
})