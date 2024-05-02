const mongoose = require("mongoose")

const videoSchema = new mongoose.Schema({
  title: String,
  channelName: String,
  chanelLogoUrl: String,
  viewsCount: Number,
  datePosted: Date,
  thumbnailImageUrl: String,
  videoDuration: Number
})

const Video = mongoose.model('Video', videoSchema)
module.export = Video