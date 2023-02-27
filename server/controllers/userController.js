const User = require("../schema/Users.js");
const bcrypt = require("bcrypt");

//@desc Create a new User
//@route POST /users
//access Public
const createUser = async (req, res) => {
  try {
    const { firstName, lastName, username, password, address, email } =
      req.body;

    const duplicateU = await User.findOne({ username, status: "active" })
      .lean()
      .exec();
    if (duplicateU) {
      return res.status(409).json({ message: "Duplicate Username Found" });
    }
    const duplicateE = await User.findOne({ email, status: "active" })
      .collation({ locale: "en", strength: 2 })
      .lean()
      .exec();

    if (duplicateE) {
      return res.status(409).json({ message: "Duplicate Email Address Found" });
    }

    const hashPass = await bcrypt.hash(password, 10);

    const userObject = {
      firstName,
      lastName,
      username,
      email,
      password: hashPass,
      address,
    };

    const user = await User.create(userObject);

    if (user) {
      res.status(201).json({ message: "User created successfully" });
    } else {
      res.status(400).json({ message: "Invalid User Data" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//@desc Get all Users
//@route GET /users
//access Private
const getUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select("-password")
      .sort({ status: 1 })
      .lean();

    if (users?.length) {
      return res.status(200).json(users);
    } else {
      return res.status(404).json({ message: "No Users Found" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//@desc Update an existing User
//@route PUT /users
//access Private
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      firstName,
      lastName,
      username,
      password,
      address,
      email,
      roles,
      status,
    } = req.body;

    const user = await User.findById(id).exec();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const duplicateU = await User.findOne({ username, status: "active" })
      .lean()
      .exec();
    if (duplicateU && duplicateU?._id.toString() !== id) {
      return res.status(409).json({ message: "Duplicate Username Found" });
    }
    const duplicateE = await User.findOne({ email, status: "active" })
      .collation({ locale: "en", strength: 2 })
      .lean()
      .exec();

    if (duplicateE && duplicateE?._id.toString() !== id) {
      return res.status(409).json({ message: "Duplicate Email Address Found" });
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.address = address;
    user.roles = roles;
    user.status = status;

    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }
    if (username) {
      user.username = username;
    }

    const updatedUser = await user.save();

    res.json({ message: `User ${firstName} is Updated Successfully` });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// @desc Delete user
// @route DELETE /users
// access Private
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "User ID Required" });
    }

    const user = await User.findById(id).exec();

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    user.status = "inactive";

    const updatedUser = await user.save();

    const reply = `Username ${user.username} with ID ${user._id} deleted`;

    res.json(reply);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { createUser, getUsers, updateUser, deleteUser };
