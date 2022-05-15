const { createProducts, getProductById, getProduct, updateProduct, deleteProduct } = require("./products.controller");

const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createProducts);
router.get("/", checkToken, getProduct);
router.get("/:id", checkToken, getProductById);
router.patch("/", checkToken, updateProduct);
router.delete("/", checkToken, deleteProduct);

module.exports = router;
