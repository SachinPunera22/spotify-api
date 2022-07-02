require("../models/user.model");
const mongoose = require("mongoose");
const User = mongoose.model("spotifyUser");

exports.addUser = (req, res) => {
  console.log("req:" + req.body);
  var user = new User();
  user.username = req.body.username;
  user.email = req.body.email;
  user.save((err, doc) => {
    if (!err) {
        console.log('doc');
      res.send(doc).status(200);
    } else {
      console.log("Error" + JSON.stringify(err, undefined, 2));
    }
  });
};