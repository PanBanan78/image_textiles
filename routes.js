const express = require('express')
const router = express.Router()
const Account = require('./models/account')

const {userRegister, userLogin, userAuth, checkRole} = require('./utils/auth')



router.get('/', (req, res) => {
    res.send('Hello world!')
    // const foo = Account.create({name:'bigman_like_drew', type:'pleb', password:'1234'})
})

router.post('/register', async (req, res) => {
  await userRegister(req.body, res)
})

router.post('/login', async (req, res) => {
  await userLogin(req.body, res)
})

router.get('/protected', userAuth, async (req, res) => {
  return res.status(200).json({
    message: 'login protected route',
    data: req.user
  })
})

router.get('/admin', userAuth, checkRole(['admin']), (req, res) => {
  return res.json({
    message: 'Admin only page'
  })
})

router.get('/get_accounts', async (req, res) => {
    let accounts = await Account.findAll()

    res.send(accounts)
})

router.get('/sync_tables', async (req, res) => {
    // Syncs the tables by force
    syncTables = require('./models/syncTables')

    res.send({success: true, message: 'Synced the tables'})
})

module.exports = router