require("../models/artist.model");
var ObjectId = require("mongoose").Types.ObjectId;

const mongoose = require("mongoose");

const Artist = mongoose.model("artist");
exports.addArtist = (req, res) => {
  console.log("req:" + req.body.artistName);
  var artist = new Artist();
  artist.artistName = req.body.artistName;
  artist.bio=req.body.bio;
  artist.DOB=req.body.DOB;

  artist.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error" + JSON.stringify(err, undefined, 2));
    }
  });

  exports.addArtist = async (req, res) => {

console.log('hello');

  }
};