import { Router } from 'express'
import SkillControls from './skill.controller'

const router = Router()
router.post('/add-skill', SkillControls.AddSkill)
const SkillRoutes = router
export default SkillRoutes
