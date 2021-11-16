import sequelize from "sequelize/types/lib/sequelize";
import customer from "./customer";
const { Sequelize, DataTypes } = require('sequelize');

export default class delivery extends Sequelize.Model {}
delivery.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customerID: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        // This is a reference to another model
        model: customer,
  
        // This is the column name of the referenced model
        key: 'id',
      },
    },
  },
  { sequelize, modelName: 'delivery' },
);