const { Sequelize } = require('sequelize');
const customerTypeModel = require('./models/customerType');
const contactModel = require('./models/contact');
const customerModel = require('./models/customer');
const deliveryModel = require('./models/delivery');
const orderModel = require('./models/order');
const pricingModel = require('./models/pricing');

const sequelize = new Sequelize('TestDB', 'SA', '%Pa55w0rd', {
  host: 'localhost',
  dialect: 'mssql'
});

const customerType = customerTypeModel(sequelize, Sequelize)
const customer = customerModel(sequelize, Sequelize)
const contact = contactModel(sequelize, Sequelize)
const delivery = deliveryModel(sequelize, Sequelize)
const order = orderModel(sequelize, Sequelize)
const pricing = pricingModel(sequelize, Sequelize)

//console.log(sequelize.models);

// sequelize.sync({ force: true })
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })

module.exports = {
  customerType,
  customer,
  contact,
  delivery,
  order,
  pricing
}