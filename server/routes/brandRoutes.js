const express = require("express");
const brandController = require("../controllers/brandController.js");
const router = express.Router();

router
  .post("/", brandController.createBrand)
  .get("/", brandController.getBrands)
  .get("/:sellerId", brandController.getBrandsBySeller)
  .put("/:id", brandController.updateBrand)
  .delete("/:id", brandController.deleteBrand);

module.exports = router;
