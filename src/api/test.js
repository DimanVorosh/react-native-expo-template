import axios from './index'

export default {
  async test() {
    const resp = await axios.post('/login', {
      login: 'test',
      password: 'qwerty'
    })
    return resp
  }
}
