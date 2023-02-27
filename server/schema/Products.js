const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    category: { type: String },
    brandId: { type: mongoose.Schema.Types.ObjectId, ref: "Brands" },
    gender: { type: String },
    sizes: { type: [String] },
    colors: { type: [String] },
    images: { type: [String] },
    brandName: { type: String },
    quantity: { type: Number },
    sales: { type: Number, default: 0 },
    reviews: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Reviews",
      default: [],
    },
    status: { type: String, default: "active" },
  },
  { timestamps: true }
);

const Product = mongoose.model("Products", productSchema);
module.exports = Product;
