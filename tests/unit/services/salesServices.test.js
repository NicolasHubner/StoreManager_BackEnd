const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/db/index');
const salesService = require('../../../src/services/salesServices');
const salestModels = require('../../../src/models/salesModels');

const { errorSale, resultServiceId, resultAllSales, resultInsertionOneSale, insertionOneSale, messageError } = require('./mocks/sales.mocks');

describe('Testando salesService', () => { 
  afterEach(() => sinon.restore());
  it('Testando a função getAll com id que não existe no DB', async () => {
    sinon.stub(connection, 'execute').resolves([{ message: 'Sale not found' }]);
    const result = await salesService.getAll(555);
    expect(result.message).to.equal('Sale not found');
  })
  it('Testando função getAll com Id existente', async () => {
    sinon.stub(connection, 'execute').resolves([resultServiceId]);
    const result = await salesService.getAll(2);
    expect(result.quantity).to.equal(15);
  })
  it('Testando funcão getAll', async () => { 
    sinon.stub(connection, 'execute').resolves([resultAllSales]);
    const result = await salesService.getAll();
    expect(result[0].saleId).to.equal(1);
  })
  it('Testando a inserção de uma venda', async () => {
    sinon.stub(connection, 'execute').resolves([resultInsertionOneSale]);
    const result = await salesService.add(insertionOneSale);
    expect(result.itemsSold.length).to.equal(1);
  })
  // it('Testando a verificacão de uma venda e dando erro', async () => {
  //   sinon.stub(connection, 'execute').resolves([messageError]);
  //   sinon.stub(salestModels, 'getAll').resolves([resultAllSales]);
  //   const result = await salesService.verifyId([{ productId: 1, quantity: 2 }]);
  //   console.log(result);
  //   // expect(result).to.throw(messageError.message);
  // })
})