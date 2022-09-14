const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/db/index');
const salesModels = require('../../../src/models/salesModels');

const { saleById, getAllResults, insertId3, insertSale, resultInsert, saleId2 } = require('./mocks/sales.mocks');

describe('Testando SalesModels', () => {
  afterEach(() => sinon.restore());

  it('Testando função que irá buscar todos os elementos do banco de dados', async () => {
    sinon.stub(connection, 'execute').resolves([getAllResults]);
    const result = await salesModels.getAll();
    expect(result.length).to.equal(3);
  })

  it('Testando função que irá buscar venda pelo ID', async () => {
    sinon.stub(connection, 'execute').resolves(saleById);
    const result = await salesModels.getSaleId(2);
    expect(result).to.equal(saleById)
  })

  it('Testando a inserção da venda de uma data', async () => {
    sinon.stub(connection, 'execute').resolves([insertId3])
    const result = await salesModels.addSaleDate();
    expect(result).to.equal(insertId3);
  })

  it('Testando a inserção de uma venda', async () => {
    sinon.stub(connection, 'execute').resolves(resultInsert)
    const result = await salesModels.addOneSale(3, insertSale);
    expect(result).to.equal(resultInsert)
  })

  it('Testando o request da venda com Id=2', async () => {
    sinon.stub(connection, 'execute').resolves([saleId2]);
    const result = await salesModels.getSale(2);
    expect(result).to.equal(saleId2);
  })
})