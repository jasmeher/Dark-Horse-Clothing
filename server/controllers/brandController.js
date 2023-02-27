const Brand = require("../schema/Brands.js");
const User = require("../schema/Users.js");

//@desc Create a new Brand
//@route POST /brands
//@access Private
const createBrand = async (req, res) => {
  try {
    const { name, logo, tagline, sellerId } = req.body;

    const seller = await User.findOne({
      _id: sellerId,
      roles: "seller",
    }).exec();
    if (!seller) {
      return res.status(409).json({ message: "Seller does not exist" });
    }

    const duplicate = await Brand.findOne({ name, status: "active" })
      .lean()
      .exec();
    if (duplicate) {
      return res.status(409).json({ message: "Duplicate Brand Name Found" });
    }

    const brandObject = { name, logo, tagline, sellerId };

    const brand = await Brand.create(brandObject);

    if (brand) {
      return res
        .status(201)
        .json({ message: `Brand ${name} created successfully` });
    } else {
      return res.status(400).json({ message: "Invalid Brand Data" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//@desc Get all Brands
//@route GET /brands
//access Private
const getBrands = async (req, res) => {
  try {
    const brands = await Brand.find().sort({ status: 1 }).lean();

    if (brands?.length) {
      return res.status(200).json(brands);
    } else {
      return res.status(404).json({ message: "No Brands Found" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//@desc Get all Brands by seller Id
//@route GET /brands/sellerId
//access Private
const getBrandsBySeller = async (req, res) => {
  try {
    const { sellerId } = req.params;
    const brands = await Brand.find({ sellerId }).sort({ status: 1 }).lean();

    if (brands?.length) {
      return res.status(200).json(brands);
    } else {
      return res.status(400).json({ message: "No Brands Found" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//@desc Update Brand
//@route PUT /brands/brandId
//access Private
const updateBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, tagline, logo } = req.body;

    const brand = await Brand.findById(id);
    if (!brand) {
      return res.status(400).json({ message: "No Brands Found" });
    }

    const duplicate = await Brand.findOne({ name, status: "active" })
      .lean()
      .exec();

    if (duplicate && duplicate._id.toString() !== id) {
      return res.status(409).json({ message: "Duplicate Brand name" });
    }

    brand.name = name;
    brand.tagline = tagline;
    brand.logo = logo;

    const updatedBrand = await brand.save();

    return res.json({ message: `Brand ${name} has been updated successfully` });
  } catch (error) {
    res.status(404).json({ message: "Invalid Data" });
  }
};

// @desc Delete brand
// @route DELETE /brands/:id
// access Private
const deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Brand ID Required" });
    }

    const brand = await Brand.findById(id).exec();

    if (!brand) {
      return res.status(400).json({ message: "Brand does not exist" });
    }

    brand.status = "inactive";

    const updatedBrand = await brand.save();

    const reply = `Brandname ${brand.name} with ID ${brand._id} deleted`;

    res.json(reply);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createBrand,
  getBrands,
  getBrandsBySeller,
  updateBrand,
  deleteBrand,
};
