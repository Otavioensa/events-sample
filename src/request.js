const axios = require('axios')

const request = () => axios({
  method:'get',
  url:'http://www.google.com',
})

module.exports = request
