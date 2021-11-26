const sequelize = require('../db')
const DataTypes = require('sequelize')


const Pricing = sequelize.define('Pricing', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      orderID: {
        type: DataTypes.STRING,
        allowNull: false,
        // references: {
        //   // This is a reference to another model
        //   model: order,
    
        //   // This is the column name of the referenced model
        //   key: 'id',
        // },
      },
      priceOne: {
          type: DataTypes.STRING,
      },
      oneType: {
          type: DataTypes.STRING,
      },
      priceTwo: {
          type: DataTypes.STRING,
      },
      twoType: {
          type: DataTypes.STRING,
      },
      priceThree: {
          type: DataTypes.STRING,
      },
      threeType: {
          type: DataTypes.STRING,
      },
      priceFour: {
          type: DataTypes.STRING,
      },
      fourType: {
          type: DataTypes.STRING,
      },
      priceFive: {
          type: DataTypes.STRING,
      },
      fiveType: {
          type: DataTypes.STRING,
      }
})

module.exports = Pricing