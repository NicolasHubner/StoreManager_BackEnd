const productModels = require('../models/productModels');

const getAll = (id = null) => {
  if (id) {
    return productModels.getById(id);
  }
  return productModels.getAll();
};
const add = async ({ name }) => {
  const { id } = await productModels.add(name);
  return {
    id,
    name,
  };
};
const update = async (id, name) => {
  const [allProducts] = await productModels.getAll();
  const verifiedId = allProducts.find((product) => product.id === Number(id));
  if (!verifiedId) {
    throw new Error('Product not found');
  }
  const result = await productModels.update(name, id);
  return result;
};
const deleteId = async (id) => productModels.deleteById(id);
module.exports = {
  getAll,
  add,
  update,
  deleteId,
};