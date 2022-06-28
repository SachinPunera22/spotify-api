require("./models/DB");
// require("dotenv").config({ path: "./config.env" });

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const cors = require("cors");

const songRoute = require("./routes/song.routes");
const artistRoute = require("./routes/artist.routes");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/song", songRoute);
app.use("/artist", artistRoute);
app.use(cors());


app.listen(process.env.PORT || 3000, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
