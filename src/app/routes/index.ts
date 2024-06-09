import { Router } from 'express'
import SkillRoutes from '../modules/skill/skill.route'

const router = Router()
const routes = [
  {
    path: '/skills',
    route: SkillRoutes,
  },
]

routes.map(route => router.use(route.path, route.route))

export default router
