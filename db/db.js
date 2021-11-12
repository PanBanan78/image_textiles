const {Sequelize} = require('sequelize');

const HOST = 'localhost'
const DB = 'image_textiles'
const USER = 'SA'
const PASS = '%Pa55w0rd'

const sequelize = new Sequelize(DB, USER, PASS, {
  host: HOST,
  dialect: 'mssql'
})

module.exports = sequelize