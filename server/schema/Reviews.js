const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    title: { type: String },
    rating: { type: Number },
    review: { type: String },
    images: { type: [String] },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Products" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    status: { type: String, default: "active" },
  },
  { timestamps: true }
);

const Review = mongoose.model("Reviews", reviewSchema);

module.exports = Review;
