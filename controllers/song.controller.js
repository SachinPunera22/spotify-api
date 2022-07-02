require("../models/song.model");
var ObjectId = require("mongoose").Types.ObjectId;

const mongoose = require("mongoose");

const Song = mongoose.model("song");
const Artist = mongoose.model("artist");
exports.addSong = async (req, res) => {
  // console.log("req:", req.body);

  var song = new Song();
  song.songName = req.body.songName;
  song.artist = req.body.artist;
  song.coverImage = req.body.coverImage;
  song.date = req.body.date;

  song.save((err, newSong) => {
    var updatedArtist;
    if (!err) {
      try {
        // console.log("newSong", newSong);
        newSong.artist.forEach(async (artist) => {
          const filter = { _id: artist._id };
          const update = {
            songs: newSong._id,
          };

          updatedArtist = await Artist.updateOne(
            filter,
            { $push: update }
          )
         
        });
        res.status(200).send(newSong);
      } catch {
        res.status(400).send(err);
      }
    } else {
      res.status(400).send(err);
      console.log("Error" + JSON.stringify(err, undefined, 2));
    }
  });
};
exports.updateRating = async (req, res) => {
  var totalRatings;
  var avgRatings;
  var totalUsers;
  console.log("req:", req.body);
  console.log("req:", req.params.id);

  const filter = { _id: req.params.id };

  await Song.findOne(filter).then((doc) => {
    if (doc) {
      console.log("c:", doc);

      totalRatings = doc.totalRatings + req.body.totalRatings;
      totalUsers = doc.totalUsers + 1;
      avgRatings = totalRatings / totalUsers;
    } else {
      res.status(400).send(err);
    }
  });

  console.log("totalRatings" + totalRatings);
  const update = {
    totalRatings: totalRatings,
    totalUsers: totalUsers,
    avgRatings: avgRatings,
  };

  Song.findOneAndUpdate(
    filter,
    update,
    {
      new: true,
    },
    function (doc, err) {
      if (doc) {
        res.status(200).send(doc);
      } else {
        res.status(400).send(err);
      }
    }
  );
};
exports.songList = async (req, res) => {
  console.log("hello");
  await Song.find({})
    .sort({ avgRatings: -1 })
    .limit(10)
    .populate("artist")
    .then((doc) => {
      res.status(200).send(doc);
    });
};
