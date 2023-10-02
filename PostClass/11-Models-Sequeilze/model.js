"use strict";
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sqlite:" + "./db.sqlite3");

const Todo = sequelize.define("todo1", {
  baslik: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  acıklama: {
    type: DataTypes.TEXT,
  },
  tamamlandımı: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

sequelize.sync();

sequelize
  .authenticate()
  .then(() => console.log("* DB Connected *"))
  .catch((err) => console.log("* DB Not Connected *", err));

module.exports = Todo;
