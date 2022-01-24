const express = require('express')
const router = express.Router()
const db = require('../db')
const Account = db.account
const Customer = db.customer
const Contact = db.contact
const CustomerController = require('../controllers/customer.controller')

const {userAuth, checkRole} = require('../utils/auth')



router.get('/', userAuth,(req, res) => {
    return res.status(200).json({
        success: true,
        message: 'Test auth route working!'
    })
    // const foo = Account.create({name:'bigman_like_drew', type:'pleb', password:'1234'})
})


router.post('/create_customer', async (req,res) => {
    const newCustomer = await CustomerController.createCustomer(req.body)

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

router.post('/create_contact', async(req, res) => {
    const customer = await CustomerController.findCustomerByName(req.body.customer)
    console.log(customer.id)
    delete req.body.customer

   contact = await CustomerController.createContact(customer.id, req.body)

    if(contact) {
        return res.status(200).json({
            message: "Created new contact",
            success: true
    })
    } else {
        return res.status(403).json({
            message: "Could not create new contact",
            success: false
        })
    }
})

router.get('/get_customers', async(req, res) => {
    const cusomters = await CustomerController.findAll()

    if(cusomters) {
        return res.status(200).json({
            data: cusomters,
            success: true
    })
    } else {
        return res.status(403).json({
            message: "Could not get customers",
            success: false
        })
    } 
})

router.get('/get_customers_with_contacts', async(req, res) => {
    const cusomters = await CustomerController.findAllWithContacts()

    if(cusomters) {
        return res.status(200).json({
            data: cusomters,
            success: true
    })
    } else {
        return res.status(403).json({
            message: "Could not get customers",
            success: false
        })
    } 
})

router.get('/get_contacts', async(req, res) => {
    const cusomters = await CustomerController.findAllContactsWithCustomer()

    if(cusomters) {
        return res.status(200).json({
            data: cusomters,
            success: true
    })
    } else {
        return res.status(403).json({
            message: "Could not get customers",
            success: false
        })
    } 
})

module.exports = router