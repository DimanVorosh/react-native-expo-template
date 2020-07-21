import axios from './index'

export default {
  async test () {
    const resp = await axios.post('/login', {
      login: 'DimanVor',
      password: 'qwerty123'
    })
    return resp
  }
}
