import httpStatus from 'http-status'
import asyncHandler from '../../utils/asyncHandler'
import sendResponse from '../../utils/sendResponse'
import BlogServices from './blog.service'

const AddBlog = asyncHandler(async (req, res) => {
  const payload = req.body
  const result = await BlogServices.AddBlog(payload)
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'blog added successfully',
    data: result,
  })
})

const getAllBlogs = asyncHandler(async (req, res) => {
  const result = await BlogServices.getAllBlogs()
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'blogs fetched successfully',
    data: result,
  })
})

const BlogControls = {
  AddBlog,
  getAllBlogs,
}
export default BlogControls
