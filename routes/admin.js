const express = require('express')
const router = express.Router()
const Account = require('../models/account')

const {userAuth, checkRole} = require('../utils/auth')

router.post('/change_password', userAuth, checkRole(['admin']), async (req, res) => {
    const {username, newPassword} = req.body
    const userAccount = await Account.findOne({where: {username: username}})

    if(userAccount) {
        userAccount.password = newPassword
        await userAccount.save()

        return res.status(200).json({
            message: 'Password changed',
            success: true
        })
    } else {
        return res.status(403).json({
            message: 'Could not change password',
            success: false
        })
    }      
})
  
router.get('/list_users', userAuth, checkRole(['admin']), async (req, res) => {
    const userAccounts = await Account.findAll()

    for (let i = 0; i < userAccounts.length; i++) {
        userAccounts[i].password = ''
    }

    return res.status(200).json({
        ...userAccounts
    })
})

module.exports = router