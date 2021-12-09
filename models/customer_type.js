const sequelize = require('../utils/db')
const DataTypes = require('sequelize')


const CustomerType = sequelize.define('CustomerType', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      type: {
        type: DataTypes.STRING,
      }
})

module.exports = CustomerType