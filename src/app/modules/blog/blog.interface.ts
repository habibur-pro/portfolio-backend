export type TBlog = {
  id: string
  title: string
  topic: string
  image: string
  description: string
  writer?: {
    name: string
    image: string
  }
}
