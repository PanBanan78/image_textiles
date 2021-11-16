const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('TestDB', 'SA', '%Pa55w0rd', {
  host: 'localhost',
  dialect: 'mssql'
});

try 
{
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
}

catch (error) 
{
  console.error('Unable to connect to the database:', error);
}