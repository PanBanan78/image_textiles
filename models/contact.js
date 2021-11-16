module.exports = function(sequelize, DataTypes){
return sequelize.define('contact', {
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
      // },
    },
  },
  { modelName: 'contact' },
)};