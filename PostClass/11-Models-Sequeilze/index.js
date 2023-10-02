"use strict";

const express = require("express");
const app = express();

const PORT = 2000;

app.use(express.json());

// app.all("/", (req, res) => {
//   res.send("Welcome");
// });

app.use(require("./router"));

const errorHandler = (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode ?? 500;
  res.status(errorStatusCode).send({
    error: true, // special data
    message: err.message, // error string message
    cause: err.cause, // error option cause
    // stack: err.stack, // error details
    body: req.body,
  });
};

app.use(errorHandler);
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
