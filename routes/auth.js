const express = require('express')
const router = express.Router()
const db = require('../db')
const Account = db.account

const {userRegister, userLogin, userAuth, checkRole} = require('../utils/auth')

router.post('/register', async (req, res) => {
    await userRegister(req.body, res)
})
  
router.post('/login', async (req, res) => {
    await userLogin(req.body, res)
})

module.exports = router