"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const jwt = require("jsonwebtoken");
const Personnel = require("../models/personnel.model");

module.exports = async function (userData, withRefresh = true) {
  let { username, password } = userData;

  if (username && password) {
    //! bilgilerini doğru bir şekilde girmişse ve hesabı aktifse, sunucu bir accessToken ve bir refreshToken oluşturur. AccessToken, kullanıcının belirli bir süre boyunca yetkilendirilmesini sağlar. RefreshToken ise kullanıcının oturumunu sürekli olarak yenileyebilmesi için kullanılır. Web sitesi, bu tokenları kullanıcısına geri döner. AccessToken, kullanıcının sunucuya erişimini sağlarken, RefreshToken, AccessToken'ın süresi dolarsa yeniden AccessToken alabilmesi için kullanılır.AccessToken'ın süresi (örneğin, 10 dakika) dolduğunda, kullanıcı yeniden oturum açmalı veya RefreshToken'ı kullanarak yeni bir AccessToken almalıdır. Bu, güvenliği artırır.

    //? Bütün kullanıcılar 30d sonra çıksın istiyorsak .env deki REFRESH_KEY,
    //? Bütün kullanıcılar aynı anda çıkış yapsın istiyorsak .env deki REFRESH_KEY ve ACCESS_KEY,
    //? Herkesin password'u iptal olsun istersem .env SECRET_KEY değişmeli

    const user = await Personnel.findOne({ username });

    if (withRefresh) {
      const passwordEncrypt = require("./passwordEncrypt");
      password = passwordEncrypt(password);
    }

    if (user && user.password == password) {
      if (user.isActive) {
        // Login OK

        const accessData = {
          _id: user._id,
          departmentId: user.departmentId,
          firstName: user.firstName,
          lastName: user.lastName,
          isActive: user.isActive,
          isAdmin: user.isAdmin,
          isLead: user.isLead,
        };
        const accessToken = jwt.sign(accessData, process.env.ACCESS_KEY, {
          expiresIn: "10m",
        });

        const refreshData = {
          username: user.username,
          password: user.password,
        };
        const refreshToken = withRefresh
          ? jwt.sign(refreshData, process.env.REFRESH_KEY, { expiresIn: "3d" })
          : null;

        return {
          error: false,
          token: {
            access: accessToken,
            refresh: refreshToken,
          },
        };
      } else {
        // res.errorStatusCode = 401
        // throw new Error('This account is not active.')
        return {
          error: true,
          message: "This account is not active.",
        };
      }
    } else {
      // res.errorStatusCode = 401
      // throw new Error('Wrong username or password.')
      return {
        error: true,
        message: "Wrong username or password.",
      };
    }
  } else {
    // res.errorStatusCode = 401
    // throw new Error('Please enter username and password.')
    return {
      error: true,
      message: "Please enter username and password.",
    };
  }
};
