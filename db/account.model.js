const DataTypes = require('sequelize')
const bcrypt = require('bcrypt')

module.exports = (sequelize, Sequelize) => {
  const Account = sequelize.define("account", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    role: {
        type: DataTypes.STRING,
        allowNull: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
  });

// Account.addHook('beforeCreate', async (user, options) => {
//   //HASH PASSWORD
//   console.log('######################################')
//   hash = await bcrypt.hash(user.password, 10)
//   console.log(hash)
//   user.password = hash
//   console.log(user.password)
// })

  Account.addHook('beforeSave', async (user, options) => {
    //HASH PASSWORD
    hash = await bcrypt.hash(user.password, 10)
    user.password = hash
  })
  return Account;
};
