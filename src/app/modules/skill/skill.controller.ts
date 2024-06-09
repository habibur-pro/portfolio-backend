import httpStatus from 'http-status'
import asyncHandler from '../../utils/asyncHandler'
import sendResponse from '../../utils/sendResponse'

const AddSkill = asyncHandler(async (req, res) => {
  const result = {}
  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'skill create successfully',
    data: result,
  })
})

const SkillControls = {
  AddSkill,
}
export default SkillControls
