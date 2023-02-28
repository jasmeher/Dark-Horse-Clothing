const express = require("express");
const orderController = require("../controllers/orderController.js");

const router = express.Router();

router
  .post("/", orderController.createOrder)
  .get("/config", orderController.stripeConfig)
  .get("/", orderController.getOrders)
  .get("/:userId", orderController.getOrdersByUserId)
  .put("/:orderId/:status", orderController.updateOrder);

module.exports = router;
