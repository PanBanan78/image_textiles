const DataTypes = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
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
      orderTotal: {
        type: DataTypes.STRING,
      },
      notes: {
        type: DataTypes.STRING,
      }
    })
    return Order
}