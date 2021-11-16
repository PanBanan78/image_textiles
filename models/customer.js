module.exports = function(sequelize, DataTypes){
return sequelize.define('customer', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      typeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
          // references: {
          //   // This is a reference to another model
          //   model: customerType,
      
          //   // This is the column name of the referenced model
          //   key: 'id',
          // }
      },
      contactOneID: {
        type: DataTypes.INTEGER,
        allowNull: false,
          // references: {
          //   // This is a reference to another model
          //   model: contact,
      
          //   // This is the column name of the referenced model
          //   key: 'id',
          // }
      },
      contactTwoID: {
        type: DataTypes.INTEGER,
        allowNull: false,
          // references: {
          //   // This is a reference to another model
          //   model: contact,
      
          //   // This is the column name of the referenced model
          //   key: 'id',
          // }
      },
      deliveryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
          // references: {
          //   // This is a reference to another model
          //   model: delivery,
      
          //   // This is the column name of the referenced model
          //   key: 'id',
          // }
      },
      isMailShot: {
        type: DataTypes.BOOLEAN,
      },
      heardAbout: {
        type: DataTypes.STRING,
      },
      deliveryNotes: {
        type: DataTypes.STRING,
      },
      generalNotes: {
        type: DataTypes.STRING,
      }
  },
  { modelName: 'customer' },
)};