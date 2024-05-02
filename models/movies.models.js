const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({
 title: {
   type: String,
   required: true
 },
  releaseYear: {
    type: Number,
    required: true
  },
  genre:[{
    type: String,
    enum: ["Action", "Drama", "Comedy", "Romance", "Thriller", "Fantasy", "Sci-Fi", "Horror", "Sports", "Musical", "Other"] 
  }],
  director: {
    type: String,
    required: true
  },
  actors: [{
    type: String,
  }],
  country: {
    type: String,
    default: "India"
  },
  rating:{
    type: String,
    min: 0,
    max: 10,
    default: 0
  },
  plot:{
    type: String
  },
  awards:{
    type: String
  },
  posterUrl:{
    type: String
  }
  
}, {timestamps: true})

const Profile = mongoose.model('Profile', moviesSchema)

module.exports = Profile