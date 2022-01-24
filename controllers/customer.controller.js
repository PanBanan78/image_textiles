const db = require("../db")
const Customer = db.customer
const Contact = db.contact

exports.createCustomer = async (customer) => {
    return await Customer.create({
        ...customer
    })
    .then((customer) => {
        console.log(">> Created customer: " + JSON.stringify(customer, null, 4))
        return customer
    })
    .catch((err) => {
        console.log("!! Error while creating customer: " + err)
    })
}

exports.findCustomerByName = async (customerName) => {
    return await Customer.findOne({where: {name: customerName}})
    .then((customer) => {
        return customer
    })
    .catch((err) => {
        console.log("!! Error while finding customer: " + err)
    })
}

exports.createContact = async (customerId, contact) => {
    return await Contact.create({
        ...contact,
        customerId
    })
    .then((contact) => {
        console.log(">> Created contact: " + JSON.stringify(contact, null, 4))
        return contact
    })
    .catch((err) => {
        console.log("!! Error while creating customer: " + err)
    })
}

exports.findAll = async () => {
    return await Customer.findAll({ })
    .then((customers) => {
        return customers
    })
}

exports.findAllWithContacts = async () => {
    return await Customer.findAll({
        include: ['contacts']
    })
    .then((customers) => {
        return customers
    })
}

exports.findAllContactsWithCustomer = async () => {
    return await Contact.findAll({
        include: ['customer']
    })
    .then((customers) => {
        return customers
    })
}