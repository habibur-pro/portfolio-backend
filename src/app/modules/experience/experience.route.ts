import { Router } from 'express'
import ExperienceControls from './experience.controller'

const router = Router()
router.post('/add-experience', ExperienceControls.addExperience)
router.get('/', ExperienceControls.getAllExperience)
const ExperienceRoutes = router
export default ExperienceRoutes
