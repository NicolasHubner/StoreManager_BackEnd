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
  const row = await
    connection.execute('INSERT INTO StoreManager.products (name) VALUES (?)', [name]);
  const result = {
    id: row[0].insertId,
  };
  return result;
};

const deleteId = async (id) => {
  const [row] = await connection.execute('DELETE FROM StoreManager.products WHERE id = ?', [id]);
  return row.affectedRows;
};

const update = async (name, id) => {
  await deleteId(id);
  const [row] = await connection
    .execute('INSERT INTO StoreManager.products (name, id) VALUES (?, ?)', [name, id]);
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
  deleteId,
  update,
};