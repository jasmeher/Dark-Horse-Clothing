const Product = require("../schema/Products.js");
const User = require("../schema/Users.js");
const Brand = require("../schema/Brands.js");

//@desc create new Product
//@route POST /products/sellerId
//access Private
const createProduct = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const {
      name,
      description,
      price,
      category,
      brandId,
      gender,
      sizes,
      colors,
      images,
      brandName,
    } = req.body;

    const seller = await User.findOne({
      _id: sellerId,
      roles: "seller",
    }).exec();
    if (!seller) {
      return res.status(409).json({ message: "Seller does not exist" });
    }

    const duplicate = await Product.findOne({ name }).lean().exec();

    if (duplicate) {
      return res.status(409).json({ message: "Duplicate Product Name" });
    }

    const productObject = {
      name,
      description,
      price,
      category,
      brandId,
      gender,
      sizes,
      colors,
      images,
      brandName,
    };

    const product = await Product.create(productObject);

    if (product) {
      const sellingProducts = {
        product: product.id,
        price: product.price,
        sizes: product.sizes,
        colors: product.colors,
      };

      seller.sellingProducts.push(sellingProducts);
      const updatedSeller = await seller.save();
      return res
        .status(201)
        .json({ message: `Product ${name} created successfully` });
    } else {
      return res.status(400).json({ message: "Invalid Product Data" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//@desc Get all Products
//@route GET /products
//access Public
const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ status: 1 }).lean();

    if (!products?.length) {
      return res.status(404).json({ message: "Products not found" });
    }

    const productWithBrands = await Promise.all(
      products.map(async (product) => {
        const brand = await Brand.findById(product.brandId).lean().exec();
        if (brand.status === "inactive") {
          return { ...product, brandName: brand.name, status: brand.status };
        } else {
          return { ...product, brandName: brand.name };
        }
      })
    );

    res.json(productWithBrands);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//@desc Get all Products by Brand
//@route GET /products/:brandId
//access Public
const getProductsbyBrand = async (req, res) => {
  try {
    const { brandId } = req.params;
    const products = await Product.find({ brandId }).sort({ status: 1 }).lean();

    if (!products?.length) {
      return res.status(404).json({ message: "Products not found" });
    }

    const productWithBrands = await Promise.all(
      products.map(async (product) => {
        const brand = await Brand.findById(product.brandId).lean().exec();
        return { ...product, brandName: brand.name };
      })
    );

    res.json(productWithBrands);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//@desc GET Single Product
//@route GET /products/:productId
//access Public
const getSingleProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId).lean();
    if (!product) {
      return res.status(400).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//@desc Update Product
//@route PUT /products/:id
//access Private
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      price,
      category,
      brandId,
      gender,
      sizes,
      colors,
      images,
      brandName,
      status,
    } = req.body;

    const product = await Product.findById(id).exec();
    if (!product) {
      return res.status(404).json({ message: "Product not Found" });
    }

    const duplicate = await Product.findOne({ name, status: "active" })
      .lean()
      .exec();

    if (duplicate && duplicate?._id.toString() !== id) {
      return res.status(409).json({ message: "Duplicate Product Name" });
    }

    product.name = name;
    product.description = description;
    product.price = price;
    product.category = category;
    product.brandId = brandId;
    product.gender = gender;
    product.sizes = sizes;
    product.colors = colors;
    product.images = images;
    product.brandName = brandName;
    product.status = status;

    const updatedProduct = await product.save();

    return res.json({ message: `Product ${name} was successfully updated` });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc Delete product
// @route DELETE /products/:id
// access Private
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Product ID Required" });
    }

    const product = await Product.findById(id).exec();

    if (!product) {
      return res.status(400).json({ message: "Product does not exist" });
    }

    product.status = "inactive";

    const updatedProduct = await product.save();

    const reply = `Productname ${product.name} with ID ${product._id} deleted`;

    res.json(reply);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc Favorite product
// @route PUT /products/favorite/productId/userId
// access Private
const favoriteProduct = async (req, res) => {
  try {
    const { productId, userId } = req.params;

    const user = await User.findById(userId).exec();
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const product = await Product.findById(productId).exec();
    if (!product) {
      return res.status(400).json({ message: "Product not found" });
    }

    const index = user.favoriteProducts.indexOf(productId);

    if (index > -1) {
      user.favoriteProducts.splice(index, 1);
      const updatedUser = await user.save();
      return res
        .status(200)
        .json({ message: "Product Removed from favorites list" });
    }

    user.favoriteProducts.push(productId);

    const updatedUser = await user.save();

    res.status(200).json({ message: "Product added to favorites list" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductsbyBrand,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  favoriteProduct,
};
