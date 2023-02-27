const express = require("express");
const productController = require("../controllers/productController.js");

const router = express.Router();

router
  .post("/:sellerId", productController.createProduct)
  .get("/", productController.getProducts)
  .get("/:brandId", productController.getProductsbyBrand)
  .put("/:id", productController.updateProduct)
  .delete("/:id", productController.deleteProduct)
  .put("/favorite/:productId/:userId", productController.favoriteProduct);

module.exports = router;
