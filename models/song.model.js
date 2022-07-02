const mongoose = require("mongoose");
const artistModel = require("./artist.model");

const songSchema = new mongoose.Schema({
  
  songName:{
    type: String,
    required: [true, "song must have a name!"],
  },
  artist:[{
    type: mongoose.Schema.ObjectId,
    ref: artistModel,
    required: [true, "song must have a artist!"],
}],
  totalRatings: {
    type: Number
  },
  totalUsers: {
    type: Number
  },
  avgRatings: {
    type:mongoose.Types.Decimal128
  },
  coverImage: {
    type: String,
    required: [true, "song must have a name!"],
  },
  date: {
    type: String,
    required: [true, "song must have a name!"],
  },
});


module.exports = mongoose.model("song", songSchema );
