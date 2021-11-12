// Required modules
const Sequelize = require('sequelize');

// Setup db settings below
let dbName = "TestDB";
let dbUser = "SA";
let dbPass = "%Pa55w0rd";
let dbHost = "localhost";
let dbDialect = "mssql";

// Initialise Sequelize with the above values
const sequelize = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: dbDialect
});


// Check for the connection to the database above
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

// Creation of databases
class Customer extends Model { }
Customer.init({
  customerName: Sequelize.DataTypes.STRING,
  contactName1: Sequelize.DataTypes.STRING,
  contactName2: Sequelize.DataTypes.STRING,
  customerAddress: Sequelize.DataTypes.STRING,
  customerNumber: Sequelize.DataTypes.TINYINT,
  customerEmail: Sequelize.DataTypes.STRING,
  customerNotes: Sequelize.DataTypes.STRING

}, { sequelize, modelName: "customer" });