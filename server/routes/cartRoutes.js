const express = require("express");
const {
  createCart,
  getCart,
  updateCart,
  deleteCart,
} = require("../controllers/cartController");

const router = express.Router();

router
  .post("/create", createCart)
  .get("/:userId", getCart)
  .post("/update/:userId", updateCart)
  .delete("/:userId", deleteCart);

module.exports = router;
