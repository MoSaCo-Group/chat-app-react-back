
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const http = require('http')
const socket = require('socket.io')

const userRoutes = require('./app/routes/user_routes')
const profileRoutes = require('./app/routes/profile_routes')

const errorHandler = require('./lib/error_handler')
const requestLogger = require('./lib/request_logger')

const db = require('./config/db')

const auth = require('./lib/auth')

const serverDevPort = 4741
const clientDevPort = 7165

mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

const app = express()

const server = http.createServer(app)

const io = socket(server, {
  cors: {
    origin: 'http://localhost:7165',
    methods: ['GET', 'POST']
  }
})

// set CORS headers on response from this API using the `cors` NPM package
// `CLIENT_ORIGIN` is an environment variable that will be set on Heroku
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || `http://localhost:${clientDevPort}`
  })
)

// define port for API to run on
const port = process.env.PORT || serverDevPort

app.use(auth)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(requestLogger)

app.use(userRoutes)
app.use(profileRoutes)

app.use(errorHandler)

io.on('connection', (socket) => {
  socket.on('message', (message) => {
    io.emit('newMessage', {
      message: message,
      time: new Date()
    })
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

server.listen(port, () => {
  console.log('listening on port ' + port)
})

module.exports = app
