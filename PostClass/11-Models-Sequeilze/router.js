const router = require("express").Router();

const Todo = require("./model");

router.get("/", async (req, res) => {
  const data = await Todo.findAndCountAll();
  res.send({ error: false, result: data });
});

router.post("/", async (req, res) => {
  const data = await Todo.create(req.body);
  res.send({ error: false, body: req.body, message: "Created", result: data });
});

module.exports = router;
