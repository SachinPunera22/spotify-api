const mongoose = require("mongoose");

const spotifyUserSchema = new mongoose.Schema({
  
  username:{
    type: String,
    required: [true, "username is required"],
  },
  email:{
    type: String,
    required: [true, "email is required"]
  }
});


module.exports = mongoose.model("spotifyUser", spotifyUserSchema );
