const Sequelize = require('sequelize');


const HOST = 'localhost'
const DB = 'image_textiles'
const USER = 'SA'
const PASS = '%Pa55w0rd'



const sequelize = new Sequelize(DB, USER, PASS, {
  host: HOST,
  dialect: 'mssql'
})

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }