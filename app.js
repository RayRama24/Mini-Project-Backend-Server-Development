require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/users/user.router");
const productsRouter = require("./api/products/products.router");
const cors = require("cors");

app.use(express.json());

app.use(cors());

app.use("/api/users", userRouter);
app.use("/api/products", productsRouter);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
