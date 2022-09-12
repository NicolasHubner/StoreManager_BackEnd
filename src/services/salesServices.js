const salesModels = require('../models/salesModels');

const getAll = () => salesModels.getAll();

module.exports = {
  getAll,
};