<!--! Genel Olarak Token: -->
<!-- https://jwt.io/ -->

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3REMCIsInBhc3N3b3JkIjoiZmM0NGY4YzU0ZjFkZDg3ZjNhOGU4YzlmZjRhYjJiZDdjMzZjYjk3NWNmMzBmMzJmMzIzOGFiNTJmZGZjNmMxMSIsImlhdCI6MTY5NzA1MTAzMywiZXhwIjoxNjk3MzEwMjMzfQ.WcXh4BtuVk3mdb3kb6mkDlI6XunIwZ275wx5VEam1NQ

Yukarıdaki token nokta ile ayrılan 3 bölümden oluşmuştur.

1. Bölüm --> Header şifreleme türü ve algoritması.
2. Bölüm --> Orta alan data. Yani parola, Kullanıcı adı vb. bilgilerin olduğu alan.
3. Bölüm --> Doğrulama alanı. Elektronik imza gibi. Yukarddaki bölümlerri doğrulama alanı.

<!-- !Token Tanımlama: -->

auth.controller.js dosyasında bulunan aşağıdaki kod yazılır.
Kullanıcı aktif ise (user.isActive) ise tokenler bu fonksiyonda return edilir. Burada accessToken 10 dakika, refreshToken ise 3 gün tanımlandı sebebi:

Kullanıcı Girişi (Login) ve Yetkilendirme İşlemi:

Bir kullanıcı, web sitesine erişmeye çalışır ve "Giriş Yap" butonuna tıklar.

Kullanıcı adı (username) ve şifre (password) giriş formunda girilir ve "Giriş Yap" düğmesine basılır.

Sunucu (Node.js ile yazılmış) kullanıcının giriş bilgilerini alır ve bu bilgilerle kullanıcıyı doğrular. Yukarıdaki kod, kullanıcının kimlik bilgilerini kontrol eder ve kullanıcının veritabanında kayıtlı olduğunu doğrular.

Eğer kullanıcı kimlik bilgilerini doğru bir şekilde girmişse ve hesabı aktifse, sunucu bir accessToken ve bir refreshToken oluşturur. AccessToken, kullanıcının belirli bir süre boyunca yetkilendirilmesini sağlar. RefreshToken ise kullanıcının oturumunu sürekli olarak yenileyebilmesi için kullanılır.

Web sitesi, bu tokenları kullanıcısına geri döner. AccessToken, kullanıcının sunucuya erişimini sağlarken, RefreshToken, AccessToken'ın süresi dolarsa yeniden AccessToken alabilmesi için kullanılır.

Kullanıcı, bu tokenları kullanarak sunucudan korumalı bilgilere erişebilir.

AccessToken'ın süresi (örneğin, 10 dakika) dolduğunda, kullanıcı yeniden oturum açmalı veya RefreshToken'ı kullanarak yeni bir AccessToken almalıdır. Bu, güvenliği artırır.

Eğer kullanıcı kimlik bilgilerini yanlış girerse veya hesabı aktif değilse, sunucu hatalı bir giriş durumu veya hesap etkinleştirilmemiş bir mesaj döndürür.

Bu şekilde, kullanıcılar web sitesine giriş yapabilir, oturum açabilir ve korumalı içeriklere erişebilirler. Tokenlar, kullanıcıların kimlik doğrulamasını ve yetkilendirmesini sağlar, böylece kullanıcıların oturumları güvende tutulurken kullanıcı deneyimi de iyileştirilir. Bu, pek çok modern web sitesi ve uygulamasında kullanılan bir oturum yönetimi yaklaşımıdır.

<!--? const jwt = require('jsonwebtoken')
const Personnel = require('../models/personnel.model')

module.exports = async function(userData, withRefresh = true) {

const jwt = require("jsonwebtoken");
const Personnel = require("../models/personnel.model");
const checkUserAndSetToken = require("../helpers/checkUserAndSetToken");

module.exports = {
  login: async (req, res) => {
    /*
        const { username, password } = req.body

        if (username && password) {

            const user = await Personnel.findOne({ username, password })

            if (user) {

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
                    }
                    const accessToken = jwt.sign(accessData, process.env.ACCESS_KEY, { expiresIn: '10m' })

                    const refreshData = {
                        username: user.username,
                        password: user.password
                    }
                    const refreshToken = jwt.sign(refreshData, process.env.REFRESH_KEY, { expiresIn: '3d' })

                    res.send({
                        error: false,
                        token: {
                            access: accessToken,
                            refresh: refreshToken
                        }
                    })

                } else {

                    res.errorStatusCode = 401
                    throw new Error('This account is not active.')
                }
            } else {

                res.errorStatusCode = 401
                throw new Error('Wrong username or password.')
            }
        } else {

            res.errorStatusCode = 401
            throw new Error('Please enter username and password.')
        }
        */
    const checkUser = await checkUserAndSetToken(req.body);
    if (checkUser.error) {
      res.errorStatusCode = 401;
      throw new Error(checkUser.message);
    } else {
      res.send(checkUser);
    }
  },

  refresh: async (req, res) => {
    const refreshToken = req.body?.token?.refresh || null;

    if (refreshToken) {
      const jwtData = jwt.verify(refreshToken, process.env.REFRESH_KEY);

      if (jwtData) {
        const checkUser = await checkUserAndSetToken(jwtData, false);
        if (checkUser.error) {
          res.errorStatusCode = 401;
          throw new Error(checkUser.message);
        } else {
          res.send(checkUser);
        }
      } else {
        res.errorStatusCode = 401;
        throw new Error("Wroong JWT Token");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Please entry token.refresh");
    }
  },

  logout: async (req, res) => {
    res.send({
      error: false,
      message:
        "No need any doing for logout. You must deleted Bearer Token from your browser.",
    });
  },
}; -->

<!--! Sonrasında authenticated.js ile frontend'den gelen "Bearer token" şeklindeki token'i alarak -->

jwt.verify metodu ile anlaşılması zor token decoder edilmiş oluyor. ve bize err veya user olmak üzere 2 farklı veri döndürüyor. user içerisinde accessToken'ın çözümlenmiş hali olan
"user": {
"\_id": "6526ee7f5a680158ffa446d5",
"departmentId": "6526ee7f5a680158ffa446d0",
"firstName": "firstName",
"lastName": "lastName",
"isActive": true,
"isAdmin": false,
"isLead": false,
"iat": 1697106817,
"exp": 1697107417
}
verisi bize dönmüş oluyor. Böylece veri tabanına gitmeden token üzerinden bu verilere ulaşmış oluyoruz. Aynı zamanda isLogin'i de true'ya çevirdiğimiz için isLogin'i kullanabilir hale getiriyoruz.
