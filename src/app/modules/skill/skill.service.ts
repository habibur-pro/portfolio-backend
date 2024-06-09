import randomGenerator from '../../utils/randomGenerator'
import { TSkill } from './skill.interface'
import Skill from './skill.model'

const addSkill = async (payload: Partial<TSkill>) => {
  const id = randomGenerator()
  const skill = await Skill.create({
    id,
    name: payload.name,
    icon: payload.icon,
  })
  return skill
}
const getallSkill = async () => {
  const skills = await Skill.find({}).sort({ createdAt: 'desc' })
  return skills
}

const SkillServices = {
  addSkill,
  getallSkill,
}
export default SkillServices
