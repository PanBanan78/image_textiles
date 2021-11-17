const sequelize = require('../db')
const DataTypes = require('sequelize')


const Account = sequelize.define('Account', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
  
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

// Account.sync({force:true})

module.exports = Account
