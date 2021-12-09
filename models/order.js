const sequelize = require('../utils/db')
const DataTypes = require('sequelize')


const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      // customerID: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   // references: {
      //   //   // This is a reference to another model
      //   //   model: customer,
    
      //   //   // This is the column name of the referenced model
      //   //   key: 'id',
      //   // }
      // },
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
      startDate: {
        type: DataTypes.DATE,
      },
      dispatchDate: {
        type: DataTypes.DATE,
      },
      designName: {
        type: DataTypes.STRING,
      },
      fabricDetails: {
        type: DataTypes.STRING,
      },
      quantityAndSizes: {
        type: DataTypes.JSON,
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
      }
})

module.exports = Order