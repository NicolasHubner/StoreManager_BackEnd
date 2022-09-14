const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/db/index');
const salesModels = require('../../../src/models/salesModels');

const { saleById } = require('./mocks/sales.mocks');

describe('Testando SalesModels', () => {
  afterEach(() => sinon.restore());

  it('Testando função que irá buscar venda pelo ID', async () => { 
    sinon.stub(connection, 'execute').resolves(saleById);
    const result = await salesModels.getSaleId(2);
    expect(result).to.equal(saleById)
  })
  it('Testando a inserção de uma venda', async () => { 
    sinon.stub(connection, 'execute').resolves([{insertId: 3}])
    const result = await salesModels.addSaleDate();
    // console.log(result);
    expect(result).to.equal(3)
  })
})