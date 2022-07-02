const express = require("express");

const router = express.Router();

const ctrlUser = require("../controllers/user.controller");


router.post("/", ctrlUser.addUser);

module.exports = router;