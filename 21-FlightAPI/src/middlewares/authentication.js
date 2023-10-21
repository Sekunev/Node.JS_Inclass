"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// $ npm i jsonwebtoken
// app.use(authentication):

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const auth = req.headers?.authorization || null;
  const accessToken = auth ? auth.split(" ")[1] : null;

  jwt.verify(
    accessToken,
    process.env.ACCESS_KEY,
    (err, userData) => (req.user = userData)
  );

  // Add createdID for all req.body: giriş yapan çalışan passenger oluştururken post işleminde createdId göndermeye gerek kalmıyor. aşağıdaki kod ile Buradan eklemiş oluyoruz.
  req.body.createdId = req.user?._id;
  next();
};
