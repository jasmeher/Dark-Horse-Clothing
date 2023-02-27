const express = require("express");
const {
  createReview,
  getReviews,
  getProductReviews,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");

const router = express.Router();

router
  .post("/", createReview)
  .get("/", getReviews)
  .get("/productId", getProductReviews)
  .put("/:id", updateReview)
  .delete("/:id", deleteReview);

module.exports = router;
