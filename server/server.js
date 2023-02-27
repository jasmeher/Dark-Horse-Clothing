const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

// CONFIGURATION
dotenv.config({ path: "./.env" });
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
const userRoutes = require("./routes/userRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const brandRoutes = require("./routes/brandRoutes.js");
const reviewRoutes = require("./routes/reviewRoutes.js");
const cartRoutes = require("./routes/cartRoutes.js");
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/brands", brandRoutes);
app.use("/orders", orderRoutes);
app.use("/reviews", reviewRoutes);
app.use("/cart", cartRoutes);

const PORT = process.env.PORT || 3001;

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DATABASE, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
  })
  .catch((err) => console.log(err));
