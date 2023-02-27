const Cart = require("../schema/Cart.js");
const User = require("../schema/Users.js");
const Product = require("../schema/Products.js");

//@desc Create Cart
//@route POST/cart/create
//access Private
const createCart = async (req, res) => {
  try {
    const { userId, items } = req.body;

    const user = await User.findById(userId).exec();
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    let total = 0;

    const price = await Promise.all(
      items.map(async (item) => {
        const product = await Product.findById(item.product);
        total += item.quantity * product.price;
        return total;
      })
    );

    const cartObject = {
      userId,
      items,
      total,
    };

    const cart = await Cart.create(cartObject);
    if (cart) {
      user.cart = cart;
      const updatedUser = await user.save();
      return res.status(201).json({ message: "Cart created successfully" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//@desc Get Cart
//@route GET/cart/:userId
//access Private
const getCart = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(400).json({ message: "Cart not found" });
    }

    return res.json(cart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//@desc Update Cart
//@route POST/cart/update/:userId
//access Private
const updateCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const { cartId, items } = req.body;

    const cart = await Cart.findById(cartId).exec();
    if (!cart) {
      return res.status(400).json({ message: "Cart not found" });
    }

    const isCart = await User.findOne({ _id: userId, cart: cartId });

    if (!isCart) {
      return res
        .status(400)
        .json({ message: "Cart does not exist for this user" });
    }

    let totalPrice = 0;

    const price = await Promise.all(
      items.map(async (item) => {
        const product = await Product.findById(item.product);
        totalPrice += item.quantity * product.price;
        return totalPrice;
      })
    );

    cart.items = items;
    cart.total = totalPrice;

    const updatedCart = await cart.save();

    return res.json({ message: "Cart updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//@desc Delete Cart
//@route DELETE/cart/userId
//access Private
const deleteCart = async (req, res) => {
  try {
    const { userId } = req.params;

    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(400).json({ message: "Cart not found" });
    }

    const result = await cart.deleteOne();

    const reply = `Cart of user with userId ${userId} deleted successfully`;

    res.json(reply);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createCart,
  getCart,
  updateCart,
  deleteCart,
};
