const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });

mongoose.connect(process.env.MONOGODB_URI, (err) => {
  if (!err) {
    console.log("Database is connected");
  } else {
    console.log("Error in MongoDB:" + JSON.stringify(err, undefined, 2));
  }
});