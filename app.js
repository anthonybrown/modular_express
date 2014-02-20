// in the terminal set the environment variable `NODE_PATH=lib` or something like this
// then start your app
// this gets rid of all the relative requires like './lib/signup' etc
// makes the app `a first class application`

var express = require('express')
  , app = express()

var login = require('login')
var signup = require('signup')
var posts = require('posts')
var userList = require('user-list')

app.use(login)
app.use(signup)
app.use(userList)
app.use(posts)

app.listen(3210)
console.log('listening on port 3210')
