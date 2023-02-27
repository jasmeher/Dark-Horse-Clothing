const express = require("express");
const userController = require("../controllers/userController.js");

const router = express.Router();

router
  .post("/", userController.createUser)
  .get("/", userController.getUsers)
  .put("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser);

module.exports = router;
