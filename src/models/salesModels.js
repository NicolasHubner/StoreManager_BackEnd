const connection = require('../db');

const getAll = () => connection.execute('SELECT * FROM StoreManager.sales');

const getSale = (sale) =>
  connection
      .execute('SELECT * FROM StoreManager.sales WHERE StoreManager.sales.sale_id = ?', [sale]);

module.exports = {
  getAll,
  getSale,
};