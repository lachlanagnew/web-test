const mongoose = require('mongoose')
const env = require('./env/environment')

mongoose.Promise = global.Promise

const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}.documents.azure.com:${env.cosmosPort}/?ssl=true`

function connect () {
  return mongoose.connect(mongoUri, {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  },
  function (err, db) {
    if (err) throw err
    return db
  })
}

module.exports = {
  connect,
  mongoose
}
