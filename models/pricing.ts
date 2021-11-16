import sequelize from "sequelize/types/lib/sequelize";
import order from "./order";
const { Sequelize, DataTypes } = require('sequelize');

export default class pricing extends Sequelize.Model {}
pricing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    orderID: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        // This is a reference to another model
        model: order,
  
        // This is the column name of the referenced model
        key: 'id',
      },
    },
    priceOne: {
        type: DataTypes.STRING,
    },
    oneType: {
        type: DataTypes.STRING,
    },
    priceTwo: {
        type: DataTypes.STRING,
    },
    twoType: {
        type: DataTypes.STRING,
    },
    priceThree: {
        type: DataTypes.STRING,
    },
    threeType: {
        type: DataTypes.STRING,
    },
    priceFour: {
        type: DataTypes.STRING,
    },
    fourType: {
        type: DataTypes.STRING,
    },
    priceFive: {
        type: DataTypes.STRING,
    },
    fiveType: {
        type: DataTypes.STRING,
    },
  },
  { sequelize, modelName: 'pricing' },
);

/*
CREATE TABLE pricing (
    id int IDENTITY(1, 1) NOT NULL,
    orderID int NOT NULL,
    priceOne int NULL,
    oneType varchar(255) NULL,
    priceTwo int NULL,
    twoType varchar(255) NULL,
    priceThree int NULL,
    threeType varchar(255) NULL,
    priceFour int NULL,
    fourType varchar(255) NULL,
    priceFive int NULL,
    fiveType varchar(255) NULL,
  )
  ALTER TABLE
    pricing
  ADD
    CONSTRAINT PK__pricing__3213E83F5877E1A2 PRIMARY KEY (id)
*/