"use strict";
/* -------------------------------------------------------
    EXPRESSJS
------------------------------------------------------- */
/*
 * npm init -y
 * npm i express dotenv
 */

/* ExpressJS Start */
const express = require("express"); // Assing expressFramework to express variable.
const app = express(); // run application on express.

/* ENV */
require("dotenv").config();
// console.log(typeof process.env.PORT, process.env.PORT);
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 8000;
/* ------------------------------------------------------- */
/* HTTP_Methods & URLs */

// app.get("/", (request, response) => {
//   //? run response.send for print-out:
//   // response.send( 'Welcome to Express' )
//   response.send({ message: "called in 'get' method." });
// });

// app.get("/", (req, res) => {
//   res.send({ the: "end" });
// });
// app.post('/', (request, response) => response.send({ message: "called in 'post' method."}))
// app.post("/", (req, res) => {
//   res.send({ key: "post işlemi" });
// });

// app.put('/', (request, response) => response.send({ message: "called in 'put' method."}))
// app.put("/", (req, res) => {
//   res.send({ key: "Put" });
// });
// app.delete('/', (request, response) => response.send({ message: "called in 'delete' method."}))
// app.delete("/", (req, res) => {
//   res.send({ key: "DELETE" });
// });
// //? allow at all methods:
// app.all('/', (request, response) => response.send({ message: "'all' option allows to all methods."}))
// app.all("/", (req, res) => {
//   res.send({ key: "Tüm Metodlar" });
// });

//? app.route('url'):
// app.route('/route')
//     .get( (req, res) => res.send('get') )
//     .post( (req, res) => res.send('post') )
//     .put( (req, res) => res.send('put') )
//     .delete( (req, res) => res.send('delete') )

// app
//   .route("/route")
//   .get((req, res) => res.send("get", "ss"))
//   .post((req, res) => res.send({ key: "post" }))
//   .put((req, res) => res.send("put"))
//   .delete((req, res) => res.send("delete"));

/* ------------------------------------------------------- */
/* URL (Path) Options */

// app.get("/", (req, res) => res.send("in 'root' path")); // '/' == root
// app.get("/path", (req, res) => res.send("in 'path'")); // '/path' == '/path/'
// //? express-urls supported JokerChar:
// app.get("/abc(x?)123", (req, res) => res.send("in 'abc(x?)123'")); // abc123 or abcx123
// app.get("/bur(c?)ak", (req, res) => res.send("burcak veya burak"));
// app.get('/abc(x+)123', (req, res) => res.send("in 'abc(x+)123'")) // abcx123 or abcxx..xx123
// app.get("/bur(c+)ak", (req, res) => res.send("burcak veya burccccak"));
// app.get('/abc*123', (req, res) => res.send("in 'abc*123'")) // abc123 or abc...123 // abc(ANY)123
// app.get("/bur*cak", (req, res) => res.send("burhjkkjjcak veya burcak"));
//? express-urls supported regexp:
// app.get(/xyz/, (req, res) => res.send("regexp /xyz/")) // url contains = 'xyz' (no limit for subPaths)
// app.get(/burcak/, (req, res) =>
//   res.send("regex /burcak/ içeren url. Yani 'ssburcakss'olur buda 'burcak'olur")
// );
// app.get(/^\/xyz/, (req, res) => res.send("regexp /^/xyz/")); // url startswith = 'xyz'
// app.get(/^\/burcak/, (req, res) =>
// res.send("burcak ile başlayan Yani: burcakss")
// );
// app.get(/xyz$/, (req, res) => res.send("regexp /xyz$/")) // url endswith = 'xyz'
// app.get(/burcak$/, (req, res) => res.send("sonu burcak ile biten"));

/* ------------------------------------------------------- */
/* URL Parameters (req.params) */

// /user/66/config/update/any/any/any
// app.get("/user/:userId/config/:configParam/*", (req, res) => {
//   res.send({
//     userId: req.params.userId,
//     configParam: req.params.configParam,
//     url: {
//       protocol: req.protocol,
//       subdomains: req.subdomains,
//       hostname: req.hostname,
//       baseUrl: req.baseUrl,
//       params: req.params,
//       query: req.query,
//       path: req.path,
//       originalUrls: req.originalUrl,
//     },
//   });
// });

// //? '\d' means only-digit-chars in regexp:
// //? '\w' means only-chars in regexp:
// // app.get('/user/:userId([0-9]+)', (req, res) => {
// app.get("/user/:userId(\\d+)", (req, res) => {
//   res.send({
//     params: req.params,
//   });
// });

// app.get("/command/:userId-:profileId", (req, res) => {
//   res.send({
//     params: req.params,
//   });
// });

/* ------------------------------------------------------- */

/* Response Methods */

//? SendStatus:
// app.get('/', (req, res) => res.sendStatus(404))
// app.get("/", (req, res) => res.sendStatus(302));
//? Status:
// app.get("/", (req, res) => {
//   console.log(res);
//   return res.status(200).send({ message: "OKKK" });
// });
// app.post('/', (req, res) => res.status(201).send({ message: 'Created' }))
// app.put('/', (req, res) => res.status(202).send({ message: 'Accepted' }))
// app.delete('/', (req, res) => res.status(204).send({ message: 'No Content' }))
//? JSON (.send() method already does this converting.)
// app.get("/", (req, res) => res.json([{ key: "value" }]));
// app.get("/", (req, res) => {
//   return res.json({ key: "value" });
// });
//? Download File (Download at browser):
// app.get("/download", (req, res) => res.download("./app.js", "changedName.js"));
//? SendFile Content:
// console.log(__dirname);
// app.get("/file", (req, res) => res.sendFile(__dirname + "/app.js")); // FilePath must be realPath
//? Redirect:
// app.get("/google", (req, res) => res.redirect(301, "https://www.google.com")); // 301 or 302
// app.get('/redirect', (req, res) => res.redirect(302, '/thisPath')) // 301 or 302

/* ------------------------------------------------------- */
// app.listen(PORT, () => console.log(`Running on http://127.0.0.1:${PORT}`));
app.listen(PORT, HOST, () => console.log(`Running on http://${HOST}:${PORT}`));
