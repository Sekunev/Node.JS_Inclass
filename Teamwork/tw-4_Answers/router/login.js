"use strict";
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Login Sayfasına Hoş Geldin");
});

module.exports = router;
