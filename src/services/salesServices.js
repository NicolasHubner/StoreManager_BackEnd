const salesModels = require('../models/salesModels');

// FAzer um middleware que faça map para item do body e validar se os produtos existem;

const add = async (sales) => {
  // console.log(sales);
  // const productIDS = sales.map((sale) => sale.productId);
  // Promise.all(productIDS.forEach((id) => {
  //   const [rows] = salesModels.getSaleId(id);
  //   if (rows.length !== 0) {
  //     throw new Error('Product not found');
  //   }
  // }));
  // const { id } = await salesModels.add(sales);
  const row = await salesModels.addSaleDate();
  // console.log(sales);
  const insertedSalesPromise = [];
  sales.map((sale) => insertedSalesPromise.push(salesModels.addOneSale(row.insertId, sale)));
  await Promise.all(insertedSalesPromise);

  return {
    id: row.insertId,
    itemsSold: sales,
  };
};

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

module.exports = {
  add,
  getAll,
};