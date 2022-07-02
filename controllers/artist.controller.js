require("../models/artist.model");
var ObjectId = require("mongoose").Types.ObjectId;

const mongoose = require("mongoose");
const Song = mongoose.model("song");
const Artist = mongoose.model("artist");

exports.addArtist = (req, res) => {
  console.log("req:" , req.body);
  var artist = new Artist();
  artist.artistName = req.body.artistName;
  artist.bio = req.body.bio;
  artist.DOB = req.body.DOB;


  artist.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error" + JSON.stringify(err, undefined, 2));
    }
  });
};
exports.topArtists = async (req, res) => {
  var artistList = await Artist.find({});

  artistList.forEach(async (artist) => {
    var songList = await Song.find({ artist: artist._id }); // find the list of songs for every artist

    var avgRating = 0;
    songList.forEach((song) => {
      avgRating = avgRating + parseFloat(song.avgRatings);
      console.log("avgRating:", avgRating); //calculate the avg rating for every artist
    });
    console.log("avgRating:", avgRating);

    avgRating = avgRating / songList.length;

    var filter = { _id: artist._id };
    var update = { avgRatings: avgRating }; //save the new avg rating  for each artist

    await Artist.findOneAndUpdate(filter, update, { new: true }).then((doc) => {
      if (doc) {
        console.log("doc:");
        // console.log("doc",doc);
      } else {
        console.log("err:");
        // console.log("err",err);
      }
    });
  });

  await Artist.find({})
    .sort({ avgRatings: -1 })
    .limit(10)
    .populate("songs")
    .then((doc) => {
      res.status(200).send(doc);
    });
};
exports.artistList = async (req, res) => {
 try{ var artistList = await Artist.find({});
res.send(artistList).status(200)
}catch(err){
  res.send("err:",err).status(400)
}

}