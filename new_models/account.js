const sequelize = require('../db')
const DataTypes = require('sequelize')
const bcrypt = require('bcrypt')

const Account = sequelize.define('Account', {
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
        allowNull: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Account.addHook('beforeCreate', async (user, options) => {
  //HASH PASSWORD
  hash = await bcrypt.hash(user.password, 10)
  user.password = hash
})

Account.prototype.test = function(){
  console.log('THIS WORKs')
}

Account.prototype.ValidatePassword = async function(plainText) {
  const user = this;
  const valid = await bcrypt.compare(plainText, this.password)

  return valid
} 

module.exports = Account
