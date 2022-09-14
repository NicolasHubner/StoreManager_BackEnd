const salesModels = require('../models/salesModels');
const productModels = require('../models/productModels');

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
  sales.map((sale) => insertedSalesPromise
    .push(salesModels.addOneSale(row.insertId, sale)));
  await Promise.all(insertedSalesPromise);
  return {
    id: row.insertId,
    itemsSold: sales,
  };
};

const verifyId = async (sales) => {
  const [allProducts] = await productModels.getAll();
  const productIDS = allProducts.map((s) => s.id);
  sales.forEach((sale) => {
    if (productIDS.includes(sale.productId) === false) {
      throw new Error('Product not found');
    }
  });
};

const update = async (id, sales) => {
  const allSales = await salesModels.getAll();
  const verifiedId = allSales.find((sale) => sale.saleId === Number(id));
  if (!verifiedId) {
    throw new Error('Sale not found');
  }
  await verifyId(sales);
  await salesModels.deleteSalesId(id);

  const insertedSalesPromise = [];
  sales.map((sale) => insertedSalesPromise
    .push(salesModels.addOneSale(id, sale)));
  await Promise.all(insertedSalesPromise);
  const result = {
    saleId: id,
    itemsUpdated: sales,
  };
  return result;
};

const deleteId = async (id) => {
  const allSales = await salesModels.getAll();
  const verifiedId = allSales.find((sale) => sale.saleId === Number(id));
  if (!verifiedId) {
    throw new Error('Sale not found');
  }
  await salesModels.deleteId(id);
};

module.exports = {
  add,
  getAll,
  verifyId,
  deleteId,
  update,
};