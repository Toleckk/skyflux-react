require('dotenv').config()

module.exports = {
  client: {
    service: {
      name: 'api',
      url: process.env.REACT_APP_API_URL,
    },
  },
}
