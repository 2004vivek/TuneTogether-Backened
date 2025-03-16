const express = require("express")
const Controllers = require("../controllers/getLocalSongData")
const Route = express.Router();
const {Signup}=require('../controllers/Auth')
Route.get("/get-data",Controllers.getData)
Route.post("/signup",Signup)

module.exports = Route;