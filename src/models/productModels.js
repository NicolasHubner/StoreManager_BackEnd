const connection = require('../db');

const getAll = async () => {
  const result = await connection.execute('SELECT * FROM StoreManager.products');
  return result;
};

const getById = async (id) => {
  const [result] = await connection
    .execute('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
  if (result.length === 0) {
    throw new Error('Product not found');
  }
  return result;
};

const add = async (name) => {
  // console.log(name);
  const row = await
    connection.execute('INSERT INTO StoreManager.products (name) VALUES (?)', [name]);
  // console.log(row);
  // console.log(row.insertId);
  const result = {
    id: row[0].insertId,
    // name,
  };
  return result;
};
module.exports = {
  getAll,
  getById,
  add,
};