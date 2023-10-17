"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/order:
const permissions = require("../middlewares/permissions");
const order = require("../controllers/order");

// URL: /orders

// router.route("/").get(order.list).post(order.create);

// router
//   .route("/:id")
//   .get(order.read)
//   .put(order.update)
//   .patch(order.update)
//   .delete(order.delete);

router.use(permissions.isLogin);

router.route("/").get(order.list).post(order.create);

router
  .route("/:id")
  .get(order.read)
  .put(order.update)
  .patch(order.update)
  .delete(permissions.isAdmin, order.delete);

/* ------------------------------------------------------- */
module.exports = router;
