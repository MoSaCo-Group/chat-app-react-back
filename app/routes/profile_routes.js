const express = require('express')
const passport = require('passport')

const Profile = require('../models/profile')
const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership

const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

const router = express.Router()

router.post('/profile', requireToken, (req, res, next) => {
  req.body.profile.owner = req.user.id
  Profile.create(req.body.profile)
    .then((profile) => {
      res.status(201).json({ profile: profile.toObject() })
    })
    .catch(next)
})

router.patch('/profile/:id', requireToken, removeBlanks, (req, res, next) => {
  delete req.body.profile.owner
  Profile.findById(req.params.id)
    .then(handle404)
    .then((profile) => {
      requireOwnership(req, profile)
      return profile.updateOne(req.body.profile)
    })
    .then(() => res.sendStatus(204))

    .catch(next)
})

router.delete('/profile/:id', requireToken, (req, res, next) => {
  Profile.findById(req.params.id)
    .then(handle404)
    .then((profile) => {
      requireOwnership(req, profile)
      profile.deleteOne()
    })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
