import sequelize from "sequelize/types/lib/sequelize";
const { Sequelize, DataTypes } = require('sequelize');

export default class customerType extends Sequelize.Model {}
customerType.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      type: {
        type: DataTypes.STRING,
      }
  },
  { sequelize, modelName: 'customerType' },
);