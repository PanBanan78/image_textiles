const DataTypes = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const CustomerType = sequelize.define("customer_type", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING,
        }
    })
    return CustomerType
}