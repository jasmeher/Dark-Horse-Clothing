const Review = require("../schema/Reviews.js");
const Product = require("../schema/Products.js");
const User = require("../schema/Users.js");

//@desc Create Review
//@route POST/reviews
//access Private
const createReview = async (req, res) => {
  try {
    const { title, rating, review, images, product, user } = req.body;

    const item = await Product.findById(product);
    if (!item) {
      return res.status(400).json({ message: "Product not found" });
    }
    const customer = await User.findById(user);
    if (!customer) {
      return res.status(400).json({ message: "Customer not found" });
    }

    const reviewObject = {
      title,
      rating,
      review,
      images,
      product,
      user,
    };

    const createdReview = await Review.create(reviewObject);

    if (createdReview) {
      item.reviews.push(createdReview.id);
      const updatedItem = await item.save();
      customer.reviews.push(createdReview.id);
      const updatedUser = await customer.save();

      return res.status(201).json({
        message: `Review Of Product ${product.name} is successfully created`,
      });
    } else {
      return res.status(400).json({ message: "Invalid Review Data" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//@desc Get Reviews
//@route GET/reviews
//access Public
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .sort({ createdAt: 1, status: 1 })
      .lean();
    if (!reviews?.length) {
      return res.status(404).json({ message: "Reviews not found" });
    }

    const reviewWithValues = await Promise.all(
      reviews.map(async (review) => {
        const user = await User.findById(review.user).lean().exec();
        const product = await Product.findById(review.product).lean().exec();
        return {
          ...review,
          username: `${user.username}`,
          productName: product.name,
        };
      })
    );
    res.json(reviewWithValues);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//@desc Get Single Product Reviews
//@route GET/reviews/:productId
//access Public
const getProductReviews = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId).lean().exec();
    if (!product) {
      return res.status(400).json({ message: "Product not found!" });
    }
    const reviews = await Review.find({ product: productId, status: "active" })
      .sort({ createdAt: 1 })
      .lean();
    if (!reviews?.length) {
      return res.status(404).json({ message: "Reviews not found" });
    }

    const reviewWithValues = await Promise.all(
      reviews.map(async (review) => {
        const user = await User.findById(review.user).lean().exec();
        const product = await Product.findById(review.product).lean().exec();
        return {
          ...review,
          username: `${user.username}`,
          productName: product.name,
        };
      })
    );
    res.json(reviewWithValues);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//@desc Update Review
//@route PUT /reviews/:id
//access Private
const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, rating, review, images, product } = req.body;

    const getProduct = await Product.findById(product).exec();
    if (!getProduct) {
      return res.status(400).json({ message: "Product not found" });
    }
    const getReview = await Review.findById(id).exec();

    if (!getReview) {
      return res.status(400).json({ message: "Review not found" });
    }

    getReview.title = title;
    getReview.rating = rating;
    getReview.review = review;
    getReview.images = images;

    const updatedReview = await getReview.save();

    return res.json({ message: `Review ${title} was successfully updated` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc Delete review
// @route DELETE /reviews/:id
// access Private
const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Review ID Required" });
    }

    const review = await Review.findById(id).exec();

    if (!review) {
      return res.status(400).json({ message: "Review does not exist" });
    }

    review.status = "inactive";

    const updatedReview = await review.save();

    const product = await Product.findOne({ reviews: id }).exec();
    if (!product) {
      return res
        .status(400)
        .json({ message: "No Product found for this review" });
    }

    const index = product.reviews.indexOf(id);
    if (index > -1) {
      product.reviews.splice(index, 1);
    }

    const updatedProduct = await product.save();

    const reply = `Review ${review.title} with ID ${review._id} deleted`;

    res.json(reply);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createReview,
  getReviews,
  getProductReviews,
  updateReview,
  deleteReview,
};
