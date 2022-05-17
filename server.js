// require necessary NPM packages
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// require route files
const chatRoutes = require('./app/routes/chat_routes')
const userRoutes = require('./app/routes/user_routes')
const profileRoutes = require('./app/routes/profile_routes')

// require middleware
const errorHandler = require('./lib/error_handler')
const requestLogger = require('./lib/request_logger')

// require database configuration logic
// `db` will be the actual Mongo URI as a string
const db = require('./config/db')

// require configured passport authentication middleware
const auth = require('./lib/auth')

// define server and client ports
// used for cors and local port declaration
const serverDevPort = 4741
const clientDevPort = 7165

// establish database connection
// use new version of URL parser
// use createIndex instead of deprecated ensureIndex
mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

// instantiate express application object
const app = express()
const http = require('http')
const server = http.createServer(app)
const socketIo = require('socket.io')

// server is allowing requests from client
const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:7165'
  }
})

app.use((req, res, next) => {
  req.io = io
  next()
})

// on connecting
io.on('connection', (socket) => {
  console.log('a user connected')
  // sending message to everyone, including the sender
  io.emit('chat message', 'Hello there')

  socket.on('send message', (data) => {
    console.log(data)
    socket.emit('receive message', data)
  })
})

// socket.on('disconnect', () => {
//   console.log('user disconnected')

// const socket = io()
// Log events here
// connection is on
// io.on('connection', (socket) => {
//   console.log('some client connected: ', socket.id)
//   // server receives the message from client
//   socket.on('chat message', (msg) => {
//     console.log('Message from Client: ', msg)

// sending message to everyone, including the sender
//     io.emit('chat message', msg)
//   })
// })
// server receives the message from client
// socket.on('chat message', (msg) => {
//   console.log('Message from Client: ', msg)
//   socket.emit('connection', null)
//
//   io.emit('chat message', msg)
// })

// set CORS headers on response from this API using the `cors` NPM package
// `CLIENT_ORIGIN` is an environment variable that will be set on Heroku
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || `http://localhost:${clientDevPort}`
  })
)

// define port for API to run on
const port = process.env.PORT || serverDevPort
// register passport authentication middleware
app.use(auth)

// add `express.json` middleware which will parse JSON requests into
// JS objects before they reach the route files.
// The method `.use` sets up middleware for the Express application
app.use(express.json())
// this parses requests sent by `$.ajax`, which use a different content type
app.use(express.urlencoded({ extended: true }))

// log each request as it comes in for debugging
app.use(requestLogger)

// register route files
app.use(chatRoutes)
app.use(userRoutes)
app.use(profileRoutes)
// register error handling middleware
// note that this comes after the route middleware, because it needs to be
// passed any error messages from them
app.use(errorHandler)

// run API on designated port (4741 in this case)
server.listen(port, () => {
  console.log('listening on port ' + port)
})

// needed for testing
module.exports = app
