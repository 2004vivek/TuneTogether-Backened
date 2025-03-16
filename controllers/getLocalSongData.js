const express = require('express')
const LocalSongModels = require('../models/localSongModel')

const getData = async (requ, resp) => {
    LocalSongModels.find()
        .then(suc => {
            return resp.status(200).json(suc)
        })
        .catch(err => {
            return resp.status(500).json(err)
        })
}

exports.getData = getData;
