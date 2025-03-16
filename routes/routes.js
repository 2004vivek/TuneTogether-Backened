const express = require("express")
const Controllers = require("../controllers/getLocalSongData")
const Route = express.Router();
const upload = require("../controllers/uploadMiddleware");
const {Signup}=require('../controllers/Auth')
Route.get("/get-data",Controllers.getData);
Route.post("/signup", upload.single("image"), Signup);

module.exports = Route;