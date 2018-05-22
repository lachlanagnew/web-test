const mongoose = require('mongoose')
const Schema = mongoose.Schema
const iotdataSchema = new Schema({
  deviceId: String,
  mts: Date,
  temperature: Number,
  humidity: Number
}, {collection: 'IoTData'}, {timestamps: true})

const Iotdata = mongoose.model('Iotdata', iotdataSchema)
module.exports = Iotdata
