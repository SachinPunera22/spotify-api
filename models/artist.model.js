const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
 
  artistName:{
    type: String,
    required: [true, "artist must have a artist Name!"],
  },
 bio: {
    type: String,
    required: [true, "artist must have a Bio!"],
  },
  DOB: {
    type: String,
    required: [true, "artist must have a Date of birth!"],
  },
  avgRatings: {
    type:mongoose.Types.Decimal128,
    default: "0.00"
  },
  songs:[{
    type: mongoose.Schema.ObjectId,
    ref: "song",
    default:[]
  }]
});


module.exports = mongoose.model("artist", artistSchema );
