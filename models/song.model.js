const mongoose = require("mongoose");
const artistModel = require("./artist.model");

const songSchema = new mongoose.Schema({
  
  songName:{
    type: String,
    // required: [true, "song must belong to a Tour!"],
  },
  artist:[{
    type: mongoose.Schema.ObjectId,
    ref: artistModel,

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
    type: String
  },
  date: {
    type: String
  },
});


module.exports = mongoose.model("song", songSchema );
