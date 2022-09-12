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

module.exports = {
  getAll,
  add,
};