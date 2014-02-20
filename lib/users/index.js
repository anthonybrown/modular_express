

exports.all = function(fn) {
  fn(null, [
      { name: 'tobi' },
      { name: 'jen' },
      { name: 'hen' },
      { name: 'tj' },
      { name: 'aj' },
      { name: 'andy' }
  ])
}

//var express = require('express')
//  , app = module.exports = express()

//app.get('/users', function(req, res) {
//  res.send('list of users')
//})
