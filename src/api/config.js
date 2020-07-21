const config = {
  axios: {
    baseURL: 'http://127.0.0.1/api'
  },

  respBody (response) {
    return {
      data: response.data,
      status: response.status
    }
  },

  respError (error) {
    return {
      status: error.response.status,
      description: error.response.data.description
    }
  }
}

export default config
