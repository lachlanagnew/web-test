const express = require('express')
const router = express.Router()

router.get('/iotdataset', (req, res) => {
  res.json({Hello: ', world'})
})

module.exports = router
