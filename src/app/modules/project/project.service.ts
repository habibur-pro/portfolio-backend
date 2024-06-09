import randomGenerator from '../../utils/randomGenerator'
import { TProject } from './project.interface'
import Project from './project.model'

const addProject = async (payload: Partial<TProject>) => {
  const id = randomGenerator()
  const project = await Project.create({
    id,
    ...payload,
  })
  return project
}
const getAllProject = async () => {
  const projects = await Project.find({}).sort({ createdAt: 'desc' })
  return projects
}

const ProjectServices = {
  addProject,
  getAllProject,
}
export default ProjectServices
