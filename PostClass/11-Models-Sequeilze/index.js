"use strict";

const express = require("express");
const app = express();

const PORT = 2000;

app.use(express.json());

app.use(require("./router"));

// DatabaseConnection:
const { dbConnection } = require("./db.connection");
dbConnection(); // sequelize.sync() must run after model defines.

app.use(require("./errorHandler"));

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
