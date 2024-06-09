import { Router } from 'express'
import BlogControls from './blog.controller'

const router = Router()
router.post('/add-blog', BlogControls.AddBlog)
router.get('/', BlogControls.getAllBlogs)
const BlogRoutes = router
export default BlogRoutes
