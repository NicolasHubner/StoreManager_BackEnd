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
const deleteId = async (id) => {
  const [allProducts] = await productModels.getAll();
  const verifiedId = allProducts.find((product) => product.id === Number(id));
  if (!verifiedId) {
    throw new Error('Product not found');
  }
  await productModels.deleteId(id);
};
const search = async (searchText) => {
  const [result] = await productModels.getAll();
  if (searchText.length === 0) {
    return result;
  }
  if (searchText.length > 0) {
    console.log('ronaldo');
    const resultOneProduct = result.filter((product) => product.name.includes(searchText));
    return resultOneProduct;
  }
};

module.exports = {
  getAll,
  add,
  update,
  deleteId,
  search,
};