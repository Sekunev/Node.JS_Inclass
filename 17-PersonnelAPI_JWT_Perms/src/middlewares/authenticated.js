"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const auth = req.headers?.authorization || null; // get Authorization
  const accessToken = auth ? auth.split(" ")[1] : null; // get JWT

  req.isLogin = false;

  // jwt.verify metodu ile anlaşılması zor token decoder edilmiş oluyor. ve bize err veya user olmak üzere 2 farklı veri döndürüyor. user içerisinde accessToken'ın çözümlenmiş hali olan
  // "user": {
  //       "_id": "6526ee7f5a680158ffa446d5",
  //       "departmentId": "6526ee7f5a680158ffa446d0",
  //       "firstName": "firstName",
  //       "lastName": "lastName",
  //       "isActive": true,
  //       "isAdmin": false,
  //       "isLead": false,
  //       "iat": 1697106817,
  //       "exp": 1697107417
  //   }
  // verisi bize dönmüş oluyor. Böylece veri tabanına gitmeden token üzerinden bu verilere ulaşmış oluyoruz.

  jwt.verify(accessToken, process.env.ACCESS_KEY, function (err, user) {
    if (err) {
      req.user = null;
      console.log("JWT Login: NO");
    } else {
      req.isLogin = true;
      req.user = user;
      // req.user = user.isActive ? user : null;
      console.log("JWT Login: YES");
    }
  });
  next();
};
