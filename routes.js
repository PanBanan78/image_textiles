const express = require('express')
const router = express.Router()
const Account = require('./new_models/account')

router.get('/', (req, res) => {
    res.send('Hello world!')
    // const foo = Account.create({name:'bigman_like_drew', type:'pleb', password:'1234'})
})

router.post('/register_account', async (req, res) => {
    // let foos = await Account.findAll()
    let newAccount = {
        name: req.body.name,
        type: req.body.type,
        password: req.body.password
    }

    await Account.create(newAccount)

    res.send({success: true, message: 'Registered new account'})
})

router.get('/get_accounts', async (req, res) => {
    let accounts = await Account.findAll()

    res.send(accounts)
})

module.exports = router