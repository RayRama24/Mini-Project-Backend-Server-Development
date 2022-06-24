const { createUser, getUser, getUserById, deleteUser, login } = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", createUser);
router.get("/", getUser);
router.get("/:id", getUserById);
// router.patch("/", checkToken, updateUser);
router.delete("/:id", deleteUser);
router.post("/login", login);

module.exports = router;
