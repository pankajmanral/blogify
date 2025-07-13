const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	role: {
		type: String,
		required: true,
		enum: ['user', 'admin'],
		default: 'user'
	},
	password: {
		type: String,
		required: true
	},
	lastLogin: {
		type: Date,
		default: Date.now
	},
	isVerified: {
		type: String,
		default: false
	},
	accountLevel: {
		type: String,
		enum: ['bronze', 'silver', 'gold'],
		default: 'bronze'
	},
	profilePicture : {
		type : String,
		default: ''
	},
	coverImage : {
		type : String,
		default : ''
	},
	bio : {
		type : String
	},
	location : {
		type : String
	},
	notificationPreference : {
		email : {
			type : String,
			default : true
		}
	},
	gender : {
		type : String,
		enum : ['Male', 'Female', 'Prefer not to say']
	},
	// store the user id who has visited the profile and fetch the user data using the profile 
	// ref : 'User' is the model name -> User model here 
	profileViewers : [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
	followers : [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
	blockedUsers : [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
	posts : [{type: mongoose.Schema.Types.ObjectId, ref:'Post'}],
	likedPosts : [{type: mongoose.Schema.Types.ObjectId, ref:'Post'}],

	passwordResetToken : {
		type : String,
	},
	passwordResetExpires : {
		type : String
	},
	accountVerificationToken : {
		type : String
	},
	accountVerificationExpires : {
		type : Date
	}
},{timestamps : true})

const User = mongoose.model('User', userSchema)

module.exports = User