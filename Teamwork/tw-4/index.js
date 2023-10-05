const express = require("express");
const app = express();
const router = express.Router();

//! Soru1
// router.get(/\a[b|c]d/, (req, res) => {
//   res.send("<h1>/abd or /acd path matched</h1");
// });

//! Soru2
// router.get(/\a[0-9]\/c{2,3}/, (req, res) => {
//   res.send("/a8/ccc or /a8/cc path matched");
// });

//! Soru3
// "hello" dizesiyle bitmesi gereken sonunda başka karakter plmayacak.

// router.get(/\/*Hello$/, (req, res) => {
//   res.send("<h1>'/merhabaHello'Route Fourth</h1>");
// });

//! Soru4
// "Hello" dizesiyle bitmeli ve bundan önce herhangi bir karakter içermemelidir.
// router.get(/^\/Hello$/, (req, res) => {
//   res.send("<h1>'/Hello'Route Fourth</h1>");
// });
/*-------------------------------------*/

//! Cevap 2
/*--------- cevap 2 --------*/

// const express = require("express");
// const app=express()
// const router = express.Router();
// router.use(express.json());
// app.use(router)
// const students = [
//   {
//     id: 1,
//     name: "Alex",
//   },
//   {
//     id: 2,
//     name: "Steve",
//   },
// ];

// router.get("/", (req, res) => {
//   res.json(students);
// });
// router.get("/:id", (req, res) => {
//   const result = students.filter((students) => students.id == req.params.id);
//   res.json(result);
// });
/*-------------------------------------*/

//! Cevap 3
// const middleware = (req, res, next) => {
//   console.log("Middleware Çalıştı.");
//   next();
// };
// app.use(middleware);

//! Kısa Kullanım
// app.use((req, res, next) => {
//   console.log("Middleware Çalıştı.");
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Merhaba Backend");
// });
/*-------------------------------------*/
//! Cevap 4
// 500 durum kodunu döndüren özel bir hata ara yazılımı

// app.use((req, res, next) => {
//   throw new Error("Bir Hata Oluştu.");
// });

// // Hata oluşunca aşağıdaki kod çalışmaz.
// // app.get("/", (req, res) => {
// //   res.send("Fonksiyon Çalıştı");
// // });

// app.use((err, req, res, next) => {
//   const statusCode = 500;
//   // const statusCode = res.errorStatusCode ?? 500;
//   res.status(statusCode).send("Hatasız Kod olmaz.-->" + err.message);
//   console.log(err);
// });
/*-------------------------------------*/
//! Cevap 5
const homeRoute = require("./router/home");
const loginRoute = require("./router/login");
app.use("/home", homeRoute);
app.use("/login", loginRoute);

/*-------------------------------------*/
app.use(router);
app.listen(2000, () =>
  console.log(
    "Running: http://127.0.0.1:2000 Regex Kaçış Kareakteri \ngösterimi"
  )
);
