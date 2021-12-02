const express = require("express");
const router = express.Router();
const userController = require('../controller/user.controller');


router.get("/hello", (req, res) => {
  res.status(200).send("Hello from server!");
});

router.post("/user", userController.addUser);


module.exports = router;
