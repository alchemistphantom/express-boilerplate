const _ = require('lodash')
const config = require('../configs/configs')

module.exports = {
  uploadAws: (req, res) => {
    if (!_.result(req.file, 'key')) {
      return res.json('Invalid')
    } else {
      const dataFile = {
        file: req.file.key,
        url: config.AWS.custom_endpoint + '/' + req.file.key
      }
      console.log(dataFile)
      return res.json(dataFile)
    }
  }
}
