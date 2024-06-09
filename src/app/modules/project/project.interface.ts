export type TProject = {
  id: string
  name: string
  technologies: Array<string>
  overview: string
  image: string
  liveSite: string
  clientSite: string
  serverSite?: string
  features?: Array<string>
  credentials?: Array<{ name: string; value: string }>
}
export type TCredentials = { name: string; value: string }
