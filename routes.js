const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello world!')
})

router.get('/test', (req, res) => {
    res.send('test page')
})

module.exports = router