var fetch = require('node-fetch')

function send (req, res) {
  fetch('https://msgtorpi.azurewebsites.net/api/Msgtorpifunction?code=aq1rjaf5L4e9acZRVNnt8RmvfuQRLpljY4ERRluvdgq3H1Bdgcihbg==', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: req.body
  })
  res.json({done: 'true'})
}

module.exports = { send }
