const sequelize = require('./db')
const DataTypes = require('sequelize')

const Customer = sequelize.define('Customer', {
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

    invoiceEmail: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Contact = sequelize.define('Contact', {
    
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

Contact.belongsTo(Customer)
Customer.hasMany(Contact)


  Customer.sync({force: true})
  Contact.sync({force: true})
  console.log("The table for the User model was just (re)created!")