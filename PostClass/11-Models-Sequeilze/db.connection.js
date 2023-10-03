"use strict";

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sqlite:" + "./db.sqlite3");

const dbConnection = () => {
  // CREATE
  sequelize.sync({ alter: true });

  sequelize
    .authenticate()
    .then(() => console.log("DB Connnected"))
    .catch((err) => console.log("DB Connnected", err));
};

module.exports = { sequelize, DataTypes, dbConnection };
