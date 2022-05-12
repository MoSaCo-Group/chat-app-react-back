const express = require('express')
const passport = require('passport')
const Chat = require('../models/chat')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

router.get('/Chat', requireToken, (req, res, next) => {
  Chat.find()
    .then(chat => {
      return chat.map(chat => chat.toObject())
    })
    .then(chat => res.status(200).json({ chat: chat }))
    .catch(next)
})

router.post('/Chat', requireToken, (req, res, next) => {
  req.body.chat.owner = req.user.id
  console.log(req.body.chat)
  Chat.create(req.body.chat)
    .then(chat => {
      req.io.emit('chat message', { chat: chat.toObject() })
      console.log('emitting from server')
      res.status(201).json({ chat: chat.toObject() })
    })
    .catch(next)
})

module.exports = router
