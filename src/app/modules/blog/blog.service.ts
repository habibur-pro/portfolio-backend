import randomGenerator from '../../utils/randomGenerator'
import { TBlog } from './blog.interface'
import Blog from './blog.model'

const AddBlog = async (payload: Partial<TBlog>) => {
  const id = randomGenerator()
  const blog = await Blog.create({
    id,
    ...payload,
  })
  return blog
}
const getAllBlogs = async () => {
  const blogs = await Blog.find({}).sort({ createdAt: 'desc' })
  return blogs
}

const BlogServices = {
  AddBlog,
  getAllBlogs,
}
export default BlogServices
