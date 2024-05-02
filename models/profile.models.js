const mongoose = require('mongoose')

const xProfileSchema = new mongoose.Schema({
  fullName: String,
  userName: String,
  bio: String,
  followingCount: Number,
  followerCount: Number,
  CompanyName: String,
  location: String,
  portfolioUrl: String,
})

const Profile = mongoose.model('Profile', xProfileSchema)

module.exports = Profile