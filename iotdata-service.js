const Iotdata = require('./iotdata-model')
const moment = require('moment')
const mongoose = require('mongoose')
const env = require('./env/environment')
var co = require('co')
let db = require('./mongo')

function get (req, res) {
  let mins = req.headers['numofpoints']
  let date = moment().subtract(mins, 'minutes').format()

  fetchData(date, res)
}

function fetchData (date, res) {
  db.connect()
  var query = Iotdata
    .find()
    .sort({mts: -1})
    .where('mts').gte(date)
    .batchSize(10000000)
  query.exec((err, collection) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json(collection)
    }
  })
}

function create (req, res) {
  const { deviceId, temperature, humidity } = req.body

  const iotdata = new Iotdata({ deviceId, temperature, humidity })
  iotdata
    .save()
    .then(() => {
      res.json(iotdata)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

function update (req, res) {
  const { deviceId, temperature, humidity } = req.body

  Iotdata.findOne({ deviceId })
    .then(iotdata => {
      iotdata.temperature = temperature
      iotdata.humidity = humidity
      iotdata.save().then(res.json(iotdata))
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

function destroy (req, res) {
  const { deviceId } = req.params

  Iotdata.findOneAndRemove({ deviceId })
    .then(iotdata => {
      res.json(iotdata)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

module.exports = { get, create, update, destroy }
