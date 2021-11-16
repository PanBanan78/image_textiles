import sequelize from "sequelize/types/lib/sequelize";
import customerType from "./customerType";
import contact from "./contact";
import delivery from "./delivery";
const { Sequelize, DataTypes } = require('sequelize');

export default class customer extends Sequelize.Model {}
customer.init(
  {
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
          references: {
            // This is a reference to another model
            model: customerType,
      
            // This is the column name of the referenced model
            key: 'id',
          }
      },
      contactOneID: {
        type: DataTypes.INTEGER,
        allowNull: false,
          references: {
            // This is a reference to another model
            model: contact,
      
            // This is the column name of the referenced model
            key: 'id',
          }
      },
      contactTwoID: {
        type: DataTypes.INTEGER,
        allowNull: false,
          references: {
            // This is a reference to another model
            model: contact,
      
            // This is the column name of the referenced model
            key: 'id',
          }
      },
      deliveryID: {
        type: DataTypes.INTEGER,
        allowNull: false,
          references: {
            // This is a reference to another model
            model: delivery,
      
            // This is the column name of the referenced model
            key: 'id',
          }
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
  { sequelize, modelName: 'customer' },
);