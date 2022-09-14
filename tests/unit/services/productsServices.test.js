const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/db/index');
const productService = require('../../../src/services/productServices');
const productModels = require('../../../src/models/productModels');


const { getAllResults, saleId1, insertProduct, resultInsertProduct } = require('./mocks/product.mocks');

describe('Testando Product Service', () => {
  afterEach(() => sinon.restore());

  it('Testando função GetAll sem id', async () => {
    sinon.stub(connection, 'execute').resolves(getAllResults)
    const result = await productService.getAll();
    expect(result.length).to.equal(3);
  })
  it('Testando função GetAll com id', async () => {
    sinon.stub(connection, 'execute').resolves([saleId1])
    const result = await productService.getAll(1);
    expect(result).to.equal(saleId1);
  })
  it('Testando função de adicionar um produto', async () => {
    sinon.stub(productModels, "add").resolves(resultInsertProduct)
    const result = await productService.add(insertProduct);
    expect(result.name).to.equal('Iphone');
    expect(result.id).to.equal(4);
  })

})