"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
//* SEQUELIZE
//? npm i sequelize sqlite3

//* PG admin kullanılacaksa
//? npm i pg pg-hstore

// https://sequelize.org/docs/v6/getting-started/
const { Sequelize, DataTypes } = require("sequelize");
// Where is DB (DB Connection Details):
// postgres için aşağıdaki. AbdullahDataBase --> Tablo Hangi DB altında oluşsun istiyorsak.
const sequelize = new Sequelize(
  "postgres://postgres:2891@localhost:5432/AbdullahDataBase"
); // ?$ npm i pg pg-hstore
// const sequelize = new Sequelize('sqlite:./db.sqlite3')
// const sequelize = new Sequelize(
//   "sqlite:" + (process.env.SQLITE || "./db.sqlite3")
// );

// sequelize.define('tableName', { columns })
const Todo = sequelize.define("todo", {
  // https://sequelize.org/docs/v7/models/data-types/
  // id: { //? Not need define ID field, it will create auto.
  //     type: DataTypes.INTEGER,
  //     unique: true,
  //     allowNull: false, // default: true
  //     field: 'custom_column_name', // Change column name
  //     comment: 'Description',
  //     primaryKey: true,
  //     autoIncrement: true,
  // },
  title: {
    type: DataTypes.STRING(64), // varchar(64)
    allowNull: false,
  },
  description: DataTypes.TEXT, // ShortHand Using.
  priority: {
    // 1: High, 0: Normal, -1: Low
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0, // set default value.
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  //? Not need define "createdAt" & "updatedAt" fields.
  // createdAt: false, // Unset
  // updatedAt: false, // Unset
});

// Synchronization:
//! SYNC MUST RUN ONCE! ilk oluşturma aşamasında çalışır.
// sequelize.sync(); // CREATE TABLE Yeniden oluşturur. Birdaha çalışmaz.
// sequelize.sync({ force: true }) // DROP & CREATE Çalıştığında önceki DB siler yenisini ekler.
// sequelize.sync({ alter: true }); // TO BACKUP & DROP & CREATE & FROM BACKUP Çalıştığında Önceki  db. yedekler. Yeni bir db oluşturup onun üzerine yazar.

// Connect:
//? Bu kod parçası, Sequelize ile bir veritabanı bağlantısını doğrulamak ve bağlantının başarılı olup olmadığını kontrol etmek için kullanılır. sequelize.authenticate(): Sequelize ile tanımlanmış bir bağlantının doğruluğunu doğrular. Bu işlem veritabanı sunucusuna bir bağlantı açmaz, sadece veritabanı sunucusuna erişimin sağlıklı olup olmadığını kontrol eder.

sequelize
  .authenticate()
  .then(() => console.log("* DB Connected *"))
  .catch((err) => console.log("* DB Not Connected *", err));

module.exports = Todo;
