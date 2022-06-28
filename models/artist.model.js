const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  
 
  artistName:{
    type: String,
    // required: [true, "artist must have a artist Name."],
  },
 bio: {
    type: String,
  },
  DOB: {
    type: String,
    // ref: "Package",
    // required: [true, "artist must belong to a Tour!"],
  }
});


module.exports = mongoose.model("artist", artistSchema );
