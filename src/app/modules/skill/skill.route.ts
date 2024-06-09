import { Router } from 'express'
import SkillControls from './skill.controller'

const router = Router()
router.post('/add-skill', SkillControls.AddSkill)
router.get('/', SkillControls.getAllSkill)
const SkillRoutes = router
export default SkillRoutes
