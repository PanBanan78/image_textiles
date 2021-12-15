const DataTypes = require('sequelize')

module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
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
    return Customer
}