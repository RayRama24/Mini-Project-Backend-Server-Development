const { create, getProductById, getProduct, updateProduct, deleteProduct } = require("./products.service");

module.exports = {
  createProducts: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getProductById: (req, res) => {
    const id = req.params.id;
    getProductById(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(401);
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "product not found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getProduct: (req, res) => {
    getProduct((err, results) => {
      if (err) {
        console.log(err);
        return res.status(401);
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateProduct: (req, res) => {
    const id = req.params.id;
    const data = req.body;
    updateProduct(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(401);
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "failed to update product",
        });
      }
      return res.json({
        success: 1,
        message: "update successfully",
      });
    });
  },
  deleteProduct: (req, res) => {
    const id = req.params.id;
    const data = req.body;
    deleteProduct(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(401);
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "record not found",
        });
      }
      return res.json({
        success: 1,
        message: "product delete successfuly",
      });
    });
  },
};
