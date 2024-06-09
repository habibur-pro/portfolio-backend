import { Router } from 'express'
import SkillRoutes from '../modules/skill/skill.route'
import ProjectRoutes from '../modules/project/project.route'

const router = Router()
const routes = [
  {
    path: '/skills',
    route: SkillRoutes,
  },
  {
    path: '/projects',
    route: ProjectRoutes,
  },
]

routes.map(route => router.use(route.path, route.route))

export default router
