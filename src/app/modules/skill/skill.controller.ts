import httpStatus from 'http-status'
import asyncHandler from '../../utils/asyncHandler'
import sendResponse from '../../utils/sendResponse'
import SkillServices from './skill.service'

const AddSkill = asyncHandler(async (req, res) => {
  const payload = req.body
  const result = await SkillServices.addSkill(payload)
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'skill create successfully',
    data: result,
  })
})

const getAllSkill = asyncHandler(async (req, res) => {
  const result = await SkillServices.getallSkill()
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'skills fetched successfully',
    data: result,
  })
})

const SkillControls = {
  AddSkill,
  getAllSkill,
}
export default SkillControls
