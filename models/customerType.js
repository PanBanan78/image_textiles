module.exports = function(sequelize, DataTypes){
return sequelize.define('customerType', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      type: {
        type: DataTypes.STRING,
      }
  },
  { modelName: 'customerType' },
)};