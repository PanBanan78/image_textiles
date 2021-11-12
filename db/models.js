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
    },

    mailShotPermission: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

    whereDidYouHearAboutUs: {
        type: DataTypes.STRING,
        allowNull: true
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

const Order = sequelize.define('Order', {
    invoiceEmail: {
        type: DataTypes.STRING,
        allowNull: false
    },

    deliveryAddress: {
        type: DataTypes.STRING,
        allowNull: false
    },

    deliveryNotes: {
        type: DataTypes.STRING,
        allowNull: true
    },

    generalNotes: {
        type: DataTypes.STRING,
        allowNull: true
    },

    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Contact.belongsTo(Customer)
Customer.hasMany(Contact)

Order.belongsTo(Customer)
Customer.hasMany(Order)


// Customer.sync({force: true})
// Contact.sync({force: true})
// Order.sync({force: true})

// console.log("The table for the User model was just (re)created!")



const foo = Customer.create({
    name: 'foo',
    type: 'clothing',
    invoiceEmail: 'foo@foo.com',
    mailShotPermission: false
})

console.log(foo)