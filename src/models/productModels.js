const connection = require('../db');

const getAll = () => connection.execute('SELECT * FROM StoreManager.products');

const getById = (id) =>
  connection.execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);

const add = async (name) => {
  const [row] = await
    connection.execute('INSERT INTO StoreManager.products (name) VALUES (?)', [name]);
  console.log(row);
  const result = {
    id: row.insertId,
    name,
  };
  return result;
};
module.exports = {
  getAll,
  getById,
  add,
};