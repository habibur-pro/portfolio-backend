import crypto from 'crypto'
const randomGenerator = () => {
  const id = crypto.randomBytes(6).toString('hex')
  return id
}
export default randomGenerator
