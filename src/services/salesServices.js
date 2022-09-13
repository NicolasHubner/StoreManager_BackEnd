const salesModels = require('../models/salesModels');

// FAzer um middleware que faça map para item do body e validar se os produtos existem;

const getAll = async (id = null) => {
  if (id) {
    const [row] = await salesModels.getSaleId(id);
    if (row.length === 0) {
      throw new Error('Sale not found');
    }
    return salesModels.getSale(id);
  }
  return salesModels.getAll();
};

const add = async (sales) => {
  const row = await salesModels.addSaleDate();
  const insertedSalesPromise = [];
  sales.map((sale) => insertedSalesPromise.push(salesModels.addOneSale(row.insertId, sale)));
  await Promise.all(insertedSalesPromise);
  return {
    id: row.insertId,
    itemsSold: sales,
  };
};

const verifyId = async (sales) => {
  const allSales = await salesModels.getAll();
  const productIDS = allSales.map((s) => s.productId);
  sales.forEach((sale) => {
    if (productIDS.includes(sale.productId) === false) {
      throw new Error('Product not found');
    }
  });
  // console.log('productsIDS', productIDS);
};

module.exports = {
  add,
  getAll,
  verifyId,
};