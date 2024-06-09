import randomGenerator from '../../utils/randomGenerator'
import { TExperience } from './experience.interface'
import Experience from './experience.model'

const addExperience = async (payload: Partial<TExperience>) => {
  const id = randomGenerator()
  const experience = await Experience.create({
    id,
    ...payload,
  })
  return experience
}
const getAllExperience = async () => {
  const experiences = await Experience.find({}).sort({ createdAt: 'desc' })
  return experiences
}

const ExperienceServices = {
  addExperience,
  getAllExperience,
}
export default ExperienceServices
