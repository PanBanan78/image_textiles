const sequelize = require('../utils/db')
const DataTypes = require('sequelize')


const Contact = sequelize.define('Contact', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },

    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },

    position: {
        type: DataTypes.STRING,
        allowNull: false
    },

    address: {
        type: DataTypes.STRING,
        allowNull: false
    },

    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    responsibility: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Contact