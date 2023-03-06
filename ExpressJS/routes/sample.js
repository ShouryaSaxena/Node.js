const express = require('express')
const path = require('path')
const sample = require('../data/content')
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../templates/index.html"))
})

router.get('/sample', (req, res) => {
    res.sendFile(path.join(__dirname, "../templates/sampleHome.html"))
})

router.get('/sampleData/:slug', (req, res) => {
    mySample = sample.filter((e) => {
        return e.slug = req.params.slug
    })
    res.sendFile(path.join(__dirname, "../templates/samplePage.html"))
})

module.exports = router