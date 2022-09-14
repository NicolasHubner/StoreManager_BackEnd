const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/db/index');
const productModels = require('../../../src/models/productModels');

const { resultAllProducts, messageError, resultInsert } = require('./mocks/product.mocks');


describe('Testando Product Model', () => {
  afterEach(() => sinon.restore());

  it('Testando a função que busca todos os produtos', async () => {
    sinon.stub(connection, 'execute').resolves(resultAllProducts);
    const result = await productModels.getAll();
    expect(result.length).to.equal(3);
  })
  it('Testando que um determinado Id terá erro ', async () => { 
    sinon.stub(connection, 'execute').resolves([messageError]);
    const result = await productModels.getById(555);
    // console.log('ascascascacs');
    expect(result).to.equal(messageError);
  })
  it('Testando o resultado após uma inserção de um projeto', async () => {
    sinon.stub(connection, 'execute').resolves([{insertId: 4}]);
    const {id} = await productModels.add('ProdutoX');
    expect(id).to.equal(4);
  })
})