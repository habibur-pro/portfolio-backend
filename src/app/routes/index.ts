import { Router } from 'express'
import SkillRoutes from '../modules/skill/skill.route'
import ProjectRoutes from '../modules/project/project.route'
import ExperienceRoutes from '../modules/experience/experience.route'
import BlogRoutes from '../modules/blog/blog.route'

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
  {
    path: '/experiences',
    route: ExperienceRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
]

routes.map(route => router.use(route.path, route.route))

export default router
