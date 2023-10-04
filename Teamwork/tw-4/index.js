const express = require("express");
const app = express();

//! Soru1
// app.get(/\/(abc|acd)/, (req, res) => {
//   res.send({
//     path: "Matched /abc or /acd path",
//     regex:
//       "//(abc|acd)/ ifadesi, bir URL'de '/abc' veya /acd yolu ile başlayan herhangi bir karakter dizisini eşleştiren bir regex ifadesini temsil eder. Örneğin, '/abc123' veya '/acd/example' gibi yollar bu ifade ile eşleşebilir.",
//   });
// });

//! Soru2
// const router = express.Router();

// router.get(/\/a\d{1}c{2,3}/, (req, res) => {
//   res.send("Matched /aXcc or /aXccc path");
// });
// app.use(router);

//! Soru3

app.listen(2000, () =>
  console.log(
    "Running: http://127.0.0.1:2000 Regex Kaçış Kareakteri \ngösterimi"
  )
);
