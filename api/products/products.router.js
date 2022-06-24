const { createProducts, getProductById, getProduct, updateProduct, deleteProduct } = require("./products.controller");

const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", createProducts);
router.get("/", getProduct);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
