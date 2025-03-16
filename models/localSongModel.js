const express = require('express');
const mongoose = require('mongoose');

const LocalSongSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    artist: {
        type: [String],
        required: true
    },
    movie: {
        type: String,
        required: true
    },
    lang: {
        type: String,
        required: true
    },
    hero: {
        type: String,
        required: true
    },
    heroine: {
        type: String,
        required: true
    },
    theme: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("LocalSong", LocalSongSchema);
