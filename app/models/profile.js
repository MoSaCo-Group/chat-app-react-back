const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true
    },
    first: {
      type: String,
      required: true
    },
    last: {
      type: String,
      required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Profile', profileSchema)
