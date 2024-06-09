import { Schema, model } from 'mongoose'
import { TBlog } from './blog.interface'
const WriterSchema = new Schema({ name: String, email: String })
const BlogSchema = new Schema<TBlog>(
  {
    id: {
      type: String,
      required: [true, 'id is required'],
    },
    title: {
      type: String,
      required: [true, 'title is required'],
    },
    topic: {
      type: String,
      required: [true, 'topic is required'],
    },
    image: {
      type: String,
      required: [true, 'image is required'],
    },
    description: {
      type: String,
      required: [true, 'description is required'],
    },
    writer: {
      type: WriterSchema,
      default: null,
    },
  },
  { timestamps: true },
)
const Blog = model('blog', BlogSchema)
export default Blog
