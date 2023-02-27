const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      street1: { type: String },
      street2: { type: String },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      zipcode: { type: Number },
    },
    roles: {
      type: [String],
      default: ["customer"],
    },
    status: {
      type: String,
      default: "active",
    },
    orders: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: "Orders",
    },
    sellingProducts: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Products" },
        price: { type: Number },
        sizes: { type: [String] },
        colors: { type: [String] },
      },
    ],
    favoriteProducts: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Products",
      default: [],
    },
    reviews: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Reviews",
      default: [],
    },
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Carts",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", userSchema);

module.exports = User;
