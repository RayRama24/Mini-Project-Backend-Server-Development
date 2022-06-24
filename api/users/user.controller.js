const { create, getUserById, getUser, deleteUser, getUserByUserName } = require("./user.service");

const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
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
  getUserById: (req, res) => {
    const id = req.params.id;
    getUserById(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(401);
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "ID User Not Found",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getUser: (req, res) => {
    getUser((err, results) => {
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

  deleteUser: (req, res) => {
    const id = req.params.id
    const data = req.body;
    deleteUser(id, (err, results) => {
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
        message: "user delete successfuly",
      });
    });
  },
  login: (req, res) => {
    const body = req.body;
    getUserByUserName(body.name, (err, results) => {
      if (err) {
        console.log(err);
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "invalid name or pasword",
        });
      }
      const result = compareSync(body.password, results.password);
      if (result) {
        results.password = undefined;
        const jsontoken = sign({ result: results }, "qwe1234", {
          expiresIn: "1h",
        });
        return res.json({
          success: 1,
          message: "login succesfully",
          token: jsontoken,
        });
      } else {
        return res.status(404).json({
          success: 0,
          message: "invalid name or pasword",
        });
      }
    });
  },
};
