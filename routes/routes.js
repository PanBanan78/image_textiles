const express = require('express')
const router = express.Router()
const db = require('../db')
const Account = db.account
const Customer = db.customer


const {userAuth, checkRole} = require('../utils/auth')



router.get('/', (req, res) => {
    res.send('Hello world!')
    // const foo = Account.create({name:'bigman_like_drew', type:'pleb', password:'1234'})
})


router.post('/create_customer', userAuth, async (req,res) => {
    const newCustomer = await Customer.create({...req.body})

    if(newCustomer) {
        return res.status(200).json({
            message: "Created new customer",
            success: true
        })
    } else {
        return res.status(403).json({
            message: "Could not create new customer",
            success: false
        })
    }
})

module.exports = router