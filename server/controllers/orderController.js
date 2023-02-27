const Order = require("../schema/Orders");
const User = require("../schema/Users.js");
const Product = require("../schema/Products.js");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//@desc Get Publishable Key
//@route GET/orders/config
//@access Private
const stripeConfig = async (req, res) => {
  res.json({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
};

//@desc create new Order
//@route POST /orders
//@access Private
const createOrder = async (req, res) => {
  try {
    const { user, items, shippingAddress, billingAddress } = req.body;
    const customer = await User.findById(user);
    if (!customer) {
      return res.status(400).json({ message: "Customer not found" });
    }

    let orderPrice = 0;

    const price = await Promise.all(
      items.map(async (item) => {
        const product = await Product.findById(item.product);
        orderPrice += item.quantity * product.price;
        return orderPrice;
      })
    );
    const orderObject = {
      user,
      items,
      totalPrice: orderPrice,
      shippingAddress,
      billingAddress,
    };

    const order = await Order.create(orderObject);
    if (order) {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: orderPrice * 100,
        currency: "inr",
        automatic_payment_methods: { enabled: true },
        shipping: {
          address: {
            city: shippingAddress.city,
            country: "IN",
            line1: shippingAddress.street1,
            line2: shippingAddress.street2,
            postal_code: shippingAddress.zipcode,
            state: shippingAddress.state,
          },
          name: `${customer.firstName} ${customer.lastName}`,
        },
      });
      return res.json({
        clientSecret: paymentIntent.client_secret,
      });
    } else {
      return res.status(400).json({
        message:
          "Something went wrong while creating your order. Please Try Again.",
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//@desc Get Order
//@route POST /orders
//@access Private
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: 1 }).lean();
    if (!orders?.length) {
      return res.status(404).json({ message: "Orders not found" });
    }
    res.json(orders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//@desc Get Order By User
//@route POST /orders/:userId
//@access Private
const getOrdersByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).lean().exec();
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const orders = await Order.find({ user: userId })
      .sort({ createdAt: 1 })
      .lean();
    if (!orders?.length) {
      return res.status(404).json({ message: "Orders not found" });
    }

    res.json(orders);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//@desc Update Order
//@route POST /orders/:orderId/status
//@access Private
const updateOrder = async (req, res) => {
  try {
    const { orderId, status } = req.params;

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(400).json({ message: "Order does not exist" });
    }

    if (status === "cancel") {
      if (order.status === "completed") {
        return res
          .status(400)
          .json({ message: "Completed order can not be cancelled" });
      }
      if (order.status === "pending") {
        order.status = "cancelled";
        const updatedOrder = await order.save();
      }
      if (order.status === "cancelled") {
        return res.status(400).json({ message: "Order is already cancelled" });
      }
    }
    if (status === "success") {
      if (order.status === "completed") {
        return res.status(400).json({ message: "Order is completed" });
      }
      if (order.status === "pending") {
        order.status = "completed";
        const updatedOrder = await order.save();
      }
      if (order.status === "cancelled") {
        return res.status(400).json({ message: "Order has been cancelled" });
      }
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  stripeConfig,
  createOrder,
  getOrders,
  getOrdersByUserId,
  updateOrder,
};
