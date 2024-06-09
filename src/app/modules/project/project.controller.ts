import httpStatus from 'http-status'
import asyncHandler from '../../utils/asyncHandler'
import sendResponse from '../../utils/sendResponse'
import ProjectServices from './project.service'

const addProject = asyncHandler(async (req, res) => {
  const payload = req.body
  const result = await ProjectServices.addProject(payload)
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'project added successfully',
    data: result,
  })
})

const getAllProject = asyncHandler(async (req, res) => {
  const result = await ProjectServices.getAllProject()
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'projects fetched successfully',
    data: result,
  })
})

const ProjectControls = {
  addProject,
  getAllProject,
}
export default ProjectControls
