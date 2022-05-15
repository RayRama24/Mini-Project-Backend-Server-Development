const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into product(name, quantity, price) 
                values(?,?,?)`,
      [data.name, data.quantity, data.price],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getProduct: (callBack) => {
    pool.query(`select id, name, quantity, price from product`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getProductById: (id, callBack) => {
    pool.query(`select id, name, quantity, price from product where id = ?`, [id], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results[0]);
    });
  },
  updateProduct: (data, callBack) => {
    pool.query(`update product set name=?, quantity=?, price=? where id = ?`, [data.name, data.quantity, data.price, data.id], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  deleteProduct: (data, callBack) => {
    pool.query(`delete from product where id = ?`, [data.id], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
};
