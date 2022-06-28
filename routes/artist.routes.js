const express = require("express");

const router = express.Router();

const ctrlartist = require("../controllers/artist.controller");


// router.get("/", ctrlartist.artistList);
router.post("/", ctrlartist.addArtist);
// router.get("/artistDetail/:id",ctrlartist.artistDetail);

module.exports = router;