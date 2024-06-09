import { Schema, model } from 'mongoose'
import { TSkill } from './skill.interface'

const SkillSchema = new Schema<TSkill>(
  {
    id: {
      type: String,
      required: [true, 'id is required'],
    },
    name: {
      type: String,
      required: [true, 'name is required'],
    },
    icon: {
      type: String,
      required: [true, 'icon is required'],
    },
  },
  { timestamps: true },
)
const Skill = model<TSkill>('skill', SkillSchema)
export default Skill
