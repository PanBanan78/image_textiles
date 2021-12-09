const express = require('express')
const router = express.Router()
const Account = require('../models/account')

const {userRegister, userLogin, userAuth, checkRole} = require('../utils/auth')



router.get('/', (req, res) => {
    res.send('Hello world!')
    // const foo = Account.create({name:'bigman_like_drew', type:'pleb', password:'1234'})
})


router.get('/sync_tables', async (req, res) => {
    // Syncs the tables by force
    syncTables = require('../models/syncTables')

    res.send({success: true, message: 'Synced the tables'})
})

module.exports = router