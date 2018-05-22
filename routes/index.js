const express = require('express')
const router = express.Router()

const iotdataesService = require('../iotdata-service')
const iotSettingsService = require('../iotSettingsService')
const iotMessageService = require('../iotMessageService')

router.get('/iotdataset', (req, res) => {
  iotdataesService.get(req, res)
})

router.put('/iotdata', (req, res) => {
  iotdataesService.create(req, res)
})

router.post('/iotdata', (req, res) => {
  iotdataesService.update(req, res)
})

router.delete('/iotdata/:id', (req, res) => {
  iotdataesService.destroy(req, res)
})

router.get('/getSettings', (req, res) => {
  iotSettingsService.get(req, res)
})

router.put('/updateSettings', (req, res) => {
  iotSettingsService.create(req, res)
})

router.put('/sendMessage', (req, res) => {
  iotMessageService.send(req, res)
})

module.exports = router
