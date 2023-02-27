const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    name: { type: String },
    logo: { type: String },
    tagline: { type: String },
    sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    status: { type: String, default: "active" },
  },
  { timestamps: true }
);

const Brand = mongoose.model("Brands", brandSchema);

module.exports = Brand;
