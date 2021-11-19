const express = require('express')
const passport = require('passport')
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

router.post('/register', passport.authenticate('signup', { session: false }), async (req, res, next) => {
    res.json({message: 'Signup successful', user: req.user});
})


router.post('/check', async (req, res) => {
    const username = req.body.username
    const plainText = req.body.password
    const account = await Account.findOne({where : {name: username}})

    // console.log(accousnt.name)

    const valid = await account.ValidatePassword(plainText)

    if(valid) res.send({success: true, message:'Correct password'})

    res.send({success: false, message:'Invalid password'})
})

router.get('/get_accounts', async (req, res) => {
    let accounts = await Account.findAll()

    res.send(accounts)
})

router.get('/sync_tables', async (req, res) => {
    // Syncs the tables by force
    syncTables = require('./new_models/syncTables')

    res.send({success: true, message: 'Synced the tables'})
})

module.exports = router