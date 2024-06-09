import httpStatus from 'http-status'
import asyncHandler from '../../utils/asyncHandler'
import sendResponse from '../../utils/sendResponse'
import ExperienceServices from './experience.service'

const addExperience = asyncHandler(async (req, res) => {
  const payload = req.body
  const result = await ExperienceServices.addExperience(payload)
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'experience added successfully',
    data: result,
  })
})

const getAllExperience = asyncHandler(async (req, res) => {
  const result = await ExperienceServices.getAllExperience()
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'experiences fetched successfully',
    data: result,
  })
})

const ExperienceControls = {
  addExperience,
  getAllExperience,
}
export default ExperienceControls
