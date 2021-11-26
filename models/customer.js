const sequelize = require('../db')
const DataTypes = require('sequelize')


const Customer = sequelize.define('Customer', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    typeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   // This is a reference to another model
        //   model: customerType,
    
        //   // This is the column name of the referenced model
        //   key: 'id',
        // }
    },
    contacts: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   // This is a reference to another model
        //   model: contact,
    
        //   // This is the column name of the referenced model
        //   key: 'id',
        // }
    },
    isMailShot: {
        type: DataTypes.BOOLEAN,
    },
    heardAbout: {
        type: DataTypes.STRING,
    },
    generalNotes: {
        type: DataTypes.STRING,
    }
})

module.exports = Customer