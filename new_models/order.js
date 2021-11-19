const sequelize = require('../db')
const DataTypes = require('sequelize')


const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      customerID: {
        type: DataTypes.STRING,
        allowNull: false,
        // references: {
        //   // This is a reference to another model
        //   model: customer,
    
        //   // This is the column name of the referenced model
        //   key: 'id',
        // }
      },
      typeID: {
        type: DataTypes.STRING,
        allowNull: false,
        // references: {
        //   // This is a reference to another model
        //   model: customerType,
    
        //   // This is the column name of the referenced model
        //   key: 'id',
        // }
      },
      performDate: {
        type: DataTypes.DATE,
      },
      dispatchDate: {
        type: DataTypes.DATE,
      },
      accessories: {
        type: DataTypes.STRING,
      },
      fabricDetails: {
        type: DataTypes.STRING,
      },
      quantity: {
        type: DataTypes.STRING,
      },
      sizes: {
        type: DataTypes.STRING,
      },
      setSize: {
        type: DataTypes.STRING,
      },
      additionalFabric: {
        type: DataTypes.STRING,
      },
      specialNotes: {
        type: DataTypes.STRING,
      },
      scrapFabric: {
        type: DataTypes.STRING,
      },
      pricingID: {
        type: DataTypes.STRING,
        allowNull: false,
        // references: {
        //   // This is a reference to another model
        //   model: pricing,
    
        //   // This is the column name of the referenced model
        //   key: 'id',
        // }
      },
      orderTotal: {
        type: DataTypes.STRING,
      },
      notes: {
        type: DataTypes.STRING,
      },
      tag: {
        type: DataTypes.STRING,
      }
})

module.exports = Order