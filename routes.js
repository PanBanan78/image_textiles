const express = require('express')
const router = express.Router()
const Account = require('./new_models/account')

router.get('/', (req, res) => {
    res.send('Hello world!')
    const foo = Account.create({name:'foo1', type:'admin', password:'1234'})
})

router.get('/test', (req, res) => {
    res.send('test page')
})

module.exports = router