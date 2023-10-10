"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose express-async-errors
    $ npm i cookie-session
    $ npm i jsonwebtoken
*/

const express = require("express");
const app = express();

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());

// SessionsCookies:
app.use(require("cookie-session")({ secret: process.env.SECRET_KEY }));

// res.getModelList():
app.use(require("./src/middlewares/findSearchSortPage"));

// Login/Logout Control Middleware
// Bu fonksiyonun amacı isLogin şekilnde bir obje tanımlayıp buna istediğimiz yerden ulaşarak sayfa değişikliklerinde aynı kullanıcının hala login mi değil mi kontrolünü sağlamak.
app.use(async (req, res, next) => {
  const Personnel = require("./src/models/personnel.model");
  //   console.log(req.Session);
  //   Session {
  //     id: '652448d0f3dda18583bb3ac1',
  //     password: 'fc44f8c54f1dd87f3a8e8c9ff4ab2bd7c36cb975cf30f32f3238ab52fdfc6c11'
  //   }
  req.isLogin = false;

  // Bir personel login olmuşsa isLogin true olmalı.
  if (req.session?.id) {
    const user = await Personnel.findOne({ _id: req.session.id });

    // if (user.password == req.session.password) {
    //     req.isLogin = true
    // }
    req.isLogin = user.password == req.session.password;
  }
  //   console.log("isLogin: ", req.isLogin);

  next();
});

/* ------------------------------------------------------- */
// Routes:

// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to PERSONNEL API",
    session: req.session,
    isLogin: req.isLogin,
  });
});

/* ------------------------------------------------------- */
// /departments
app.use("/departments", require("./src/routes/department.router"));
// /personnels
app.use("/personnels", require("./src/routes/personnel.router"));

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')()
