import { Schema, model } from 'mongoose'
import { TExperience } from './experience.interface'

const ExperienceSchema = new Schema<TExperience>(
  {
    id: {
      type: String,
      required: [true, 'id is required'],
    },
    startDate: {
      type: Date,
      required: [true, 'startDate is required'],
    },
    endDate: {
      type: Date,
      default: null,
    },
    isPresent: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      required: [true, 'position is required'],
    },
    responsibilities: {
      type: [String],
      required: [true, 'responsibilities is required'],
    },
    companyName: {
      type: String,
      required: [true, 'companyName is required'],
    },
    companyAddress: {
      type: String,
      required: [true, 'companyAddress is required'],
    },
  },
  { timestamps: true },
)

const Experience = model<TExperience>('experience', ExperienceSchema)
export default Experience
