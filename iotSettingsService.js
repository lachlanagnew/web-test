const Iotsettings = require('./iotsettings-model')
const ReadPreference = require('mongodb').ReadPreference
const moment = require('moment')
const mongoose = require('mongoose')
const ObjectID = require('mongodb').ObjectID;
const env = require('./env/environment')

mongoose.Promise = global.Promise
const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}.documents.azure.com:${env.cosmosPort}/?ssl=true`


function get (req, res) {
  mongoose.connect(mongoUri, {
    useMongoClient: true,
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30,
    poolSize: 10
  },
  function (err, db) {
    if (err) {
      res.status(500).send(err)
    } else {
      var query = Iotsettings.find()
      query.collection(Iotsettings.collection)
      query.sort({_id: -1})
      query.limit(1)
      query.exec((err, collection) => {
        if (err) {
          res.status(500).send(err)
        } else {
          res.json(collection)
        }
      })
    }
  })
}

function create (req, res) {
  req.body._id = new ObjectID()
  var iotsettings = new Iotsettings(req.body)
  iotsettings.save(function (err) {
    if (err) return res.status(500).send(err)
    res.end('saved')
  })
}

module.exports = { get, create }
