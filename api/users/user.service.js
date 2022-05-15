const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into merchant(password, name, address, join_date, phone_number) 
                values(?,?,?,?,?)`,
      [data.password, data.name, data.address, data.join_date, data.phone_number],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUser: (callBack) => {
    pool.query(`select id, name, address, join_date, phone_number from merchant`, [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getUserById: (id, callBack) => {
    pool.query(`select id, name, address, join_date, phone_number from merchant where id = ?`, [id], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results[0]);
    });
  },

  deleteUser: (data, callBack) => {
    pool.query(`delete from merchant where id = ?`, [data.id], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getUserByUserName: (name, callBack) => {
    pool.query(`select * from merchant where name = ?`, [name], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results[0]);
    });
  },
};
