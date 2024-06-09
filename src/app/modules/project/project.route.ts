import { Router } from 'express'
import ProjectControls from './project.controller'

const router = Router()
router.post('/add-project', ProjectControls.addProject)
router.get('/', ProjectControls.getAllProject)
const ProjectRoutes = router
export default ProjectRoutes
