module.exports = function(sequelize, DataTypes){
return sequelize.define('order', {
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
        // }
      },
      typeID: {
        type: DataTypes.STRING,
        allowNull: false,
        // references: {
        //   // This is a reference to another model
        //   model: customerType,
    
        //   // This is the column name of the referenced model
        //   key: 'id',
        // }
      },
      performDate: {
        type: DataTypes.DATE,
      },
      dispatchDate: {
        type: DataTypes.DATE,
      },
      accessories: {
        type: DataTypes.STRING,
      },
      fabricDetails: {
        type: DataTypes.STRING,
      },
      quantity: {
        type: DataTypes.STRING,
      },
      sizes: {
        type: DataTypes.STRING,
      },
      setSize: {
        type: DataTypes.STRING,
      },
      additionalFabric: {
        type: DataTypes.STRING,
      },
      specialNotes: {
        type: DataTypes.STRING,
      },
      scrapFabric: {
        type: DataTypes.STRING,
      },
      pricingID: {
        type: DataTypes.STRING,
        allowNull: false,
        // references: {
        //   // This is a reference to another model
        //   model: pricing,
    
        //   // This is the column name of the referenced model
        //   key: 'id',
        // }
      },
      orderTotal: {
        type: DataTypes.STRING,
      },
      notes: {
        type: DataTypes.STRING,
      },
      tag: {
        type: DataTypes.STRING,
      }
    },
    { modelName: 'order' },
  )};

/*
CREATE TABLE order (
    id int NOT NULL,
    customerID int NOT NULL,
    typeID int NULL,
    performDate datetime NULL,
    dispatchDate datetime NULL,
    accessories varchar(255) NULL,
    fabricDetails varchar(255) NULL,
    quantity varchar(255) NULL,
    sizes varchar(255) NULL,
    setSize varchar(255) NULL,
    additionalFabric varchar(255) NULL,
    specialNotes varchar(255) NULL,
    scrapFabric varchar(255) NULL,
    pricingID int NULL,
    orderTotal varchar(255) NULL,
    notes varchar(255) NULL,
    tag varchar(255) NULL,
  )
  ALTER TABLE
    order
  ADD
    CONSTRAINT order_pkey PRIMARY KEY (id)
*/