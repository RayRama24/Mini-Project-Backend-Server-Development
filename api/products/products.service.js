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

  updateProduct: (id, callBack) => {
    pool.query(`update product set name=?, quantity=?, price=? where id = ?`, [id.name, id.quantity, id.price, id], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }

      return callBack(null, results);
    });
  },

  deleteProduct: (id, callBack) => {
    pool.query(`delete from product where id = ?`, [id], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
};
