const express = require('express')
const router = express.Router()
const Account = require('../models/account')

const {userRegister, userLogin, userAuth, checkRole} = require('../utils/auth')

router.post('/register', userAuth, checkRole(['admin']), async (req, res) => {
    await userRegister(req.body, res)
})
  
router.post('/login', async (req, res) => {
    await userLogin(req.body, res)
})

module.exports = router