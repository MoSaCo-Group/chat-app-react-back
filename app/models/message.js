const mongoose = require('mongoose')

const messageModel = new mongoose.Schema(
	{
		userName: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		time: {
			type: String,
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Message', messageModel)
