const express = require("express");

const router = express.Router();

const ctrlSong = require("../controllers/song.controller");


router.get("/", ctrlSong.songList);
router.post("/", ctrlSong.addSong);
router.put("/updateRating/:id" ,ctrlSong.updateRating);
module.exports = router;