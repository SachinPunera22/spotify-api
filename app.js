require("./models/DB");
require("dotenv").config({ path: "./config.env" });

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const cors = require("cors");

const songRoute = require("./routes/song.routes");
const artistRoute = require("./routes/artist.routes");
const userRoute = require("./routes/user.routes");

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/song", songRoute);
app.use("/artist", artistRoute);
app.use("/user", userRoute);


app.listen(process.env.PORT || 3000, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
