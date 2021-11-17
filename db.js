const {Sequelize} = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize(process.env.DB, process.env.USERNAME, process.env.PASS, {
  host: process.env.HOST,
  dialect: 'mssql'
})

module.exports = sequelize