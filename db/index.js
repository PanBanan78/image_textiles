// const {Sequelize} = require('sequelize');
// require('dotenv').config()

// const sequelize = new Sequelize(process.env.DB, process.env.UNAME, process.env.PASS, {
//   host: process.env.HOST,
//   dialect: 'mysql'
// })

// const syncTables = async () => {
//   await require('../models/account').sync({force: true})
//   await require('../models/contact').sync({force: true})
//   await require('../models/customer').sync({force: true})
//   await require('../models/customer_type').sync({force: true})
//   await require('../models/order').sync({force: true})
//   await require('../models/pricing').sync({force: true})
// }

// module.exports = {
//   sequelize,
//   syncTables
// }

const Sequelize = require("sequelize");
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB, process.env.UNAME, process.env.PASS, {
  host: process.env.HOST,
  dialect: 'mysql',
  // logging: false
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.account = require("./account.model")(sequelize, Sequelize);
db.customer = require("./customer.model")(sequelize, Sequelize);
db.contact = require("./contact.model")(sequelize, Sequelize);
db.customerType = require("./customerType.model")(sequelize, Sequelize);
db.order = require("./order.model")(sequelize, Sequelize);

db.customer.hasMany(db.contact, {as: "contacts"})
db.contact.belongsTo(db.customer, {
  foreignKey: "customerId",
  as: "customer"
})

db.customer.hasOne(db.customerType, {as: "customerType"})
db.customerType.belongsTo(db.customer, {
  foreignKey: "customerId",
  as: "customer"
})

db.customer.hasMany(db.order, {as: "orders"})
db.order.belongsTo(db.customer, {
  foreignKey: "customerId",
  as: "customer"
})

module.exports = db;