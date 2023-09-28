"use strict";
/* -------------------------------------------------------
    EXPRESSJS - MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- *
//? Middleware functions must be has three parameters.
//? Last parameter is for next().

//* next() for next Function:

// Middleware:
app.get("/", (reqs, res, next) => {
  // Request/Response parametresi ile next() metoduna veri gönderebilirim.
  reqs.customData = "Custom Data With Request";
  res.customDataWithResponse = "Custom Data With Response";

  next(); // Go to next Function. // Block Command

  // next() çalıştığı için çıktı vermeceyecek.
  res.send({
    message: "Middleware running",
    message: "Middleware Çalıştı bir sonraki adıma geçemedin.",
  }); // Block Command
});

app.get("/", (req, res) => {
  res.send({
    customData: [req.customData, res.customDataWithResponse],
    message: "Welcome to Home",
  });
});

/* ------------------------------------------------------- *
//* next() for next callBackFunction:

const middleFunction1 = (req, res, next) => {
  console.log(req.query);
  const skip = req.query.skip ?? false;

  req.customData = "Custom Data With Request";
  res.customDataWithResponse = "Custom Data With Response";

  if (skip) {
    // Bir sonraki route'a (bağımsız fonksiyona) git:
    next("route");
  } else {
    // Bir sonraki callback fonksiyona git:
    next();
  }
};

const middleFunction2 = (req, res, next) => {
  // next();

  res.send({
    customData: [req.customData, res.customDataWithResponse],
    message: "Here is func2, next() runned",
    message1:
      "Skip sorgusu koymadığın için bir sonraki fonksiyon çalıştı. Yani else blogundaki next() çalıştı. İşlem başarısız.",
  });
};

// //? add to function like callBack:
// app.get('/', middleFunction1, middleFunction2, (req, res) => { ... }
// //? It can be in array:
app.get("/", [middleFunction1, middleFunction2], (req, res) => {
  res.send({
    customData: [req.customData, res.customDataWithResponse],
    message: "Welcome to Home",
    message1:
      "next('route') ile bu blok neden çalışmadının cavabı:  next('route') yalnızca o anda etkili olan rotadaki işlevleri atlamanızı sağlar. İlk örnekte tüm işlevler bir dizi içinde olduğu için bu işlevlerin tamamını atlar ve sonraki rota işlemi tetiklenir. İkinci örnekte ise yalnızca belirli bir işlemin atlanmasını sağlar. Yani biz paramatrede tanımladığımız middleFunction2 fonksiyonunu kaldırırsak next('route') ile burası çalışır.",
  });
});

// next('route') ile çalıştı:
app.get("/", (req, res) => {
  res.send({
    message: "next route",
    message:
      "URL'de skip sorgusu yaptığın için if blogundaki next('route') çalıştı. İşlem başarılı.",
  });
});

/* ------------------------------------------------------- *
//* Middlewares & use():

const middleFunction1 = (req, res, next) => {
  // console.log( req.query )
  const skip = req.query.skip ?? false;

  req.customData = "Custom Data With Request";
  res.customDataWithResponse = "Custom Data With Response";

  if (skip) {
    // Bir sonraki bağımsız fonksiyona git:
    console.log("next-route çalıştı");
    next("route");
  } else {
    // Bir sonraki callback fonksiyona git:
    console.log("next çalıştı");
    next();
  }
};

const middleFunction2 = (req, res, next) => {
  // next()
  console.log("Function2 çalıştı");
  res.send({
    customData: [req.customData, res.customDataWithResponse],
    message: "Here is func2, next() runned",
  });
};

// app.use(middleFunction1); // default-url = *
// app.use(middleFunction2); // default-url = *
// app.use("/*", middleFunction1); // default-url = *

// app.use('/path', middleFunction1) // /path == /path/*

// app.use(middleFunction1, middleFunction2);
app.use([middleFunction1, middleFunction2]);

app.get("/*", (req, res) => {
  res.send({
    message: "Welcome to Home",
  });
});

/* ------------------------------------------------------- */
//* Calling middlewares from file:

// const [ middleFunction1, middleFunction2 ] = require('./middlewares/index.js')
// const [ middleFunction1, middleFunction2 ] = require('./middlewares/index')
// const [ middleFunction1, middleFunction2 ] = require('./middlewares/')
// app.use(middleFunction1, middleFunction2)

// const middleFunctions = require('./middlewares/')
// app.use(middleFunctions)

app.use(require("./middlewares/"));

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to Home",
  });
});

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
