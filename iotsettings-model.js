const mongoose = require('mongoose')
const Schema = mongoose.Schema
const IoTSettingsSchema = new Schema({
  mts: Date,
  temp: {
    min: Number,
    max: Number
  },
  labels: {
    low: String,
    mid: String,
    high: String
  },
  displayMode: String
}, { collection: 'IoTSettings' }, {timestamps: true, unique: true, sparse: true})

const IoTSettings = mongoose.model('IoTSettings', IoTSettingsSchema)
module.exports = IoTSettings
