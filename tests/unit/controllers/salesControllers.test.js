const chai = require("chai");
const sinon = require("sinon");
const chaiHttp = require('chai-http');

const { expect } = chai;
chai.use(chaiHttp);

const app = require('../../../src/app');
const connection = require("../../../src/db");

const salesService = require('../../../src/services/salesServices');
const salesController = require('../../../src/controllers/productController');

const { allSales, secondeSale } = require('./mocks/sales.mocks');

describe('Testando Camada de Controle de Sales', async () => {
  afterEach(() => connection.execute.restore());

  it('Verficar o status 200 quando realizar /sales', async () => {
    sinon.stub(connection, 'execute').onFirstCall().resolves([allSales]);
    const res = await chai.request(app).get('/sales').send();
    expect(res.status).to.be.equal(200);
  })
  it('Verificar que o primeira venda tem quantidade 5', async () => {
    sinon.stub(connection, 'execute').onFirstCall().resolves([[allSales]]);
    const res = await chai.request(app).get('/sales');
    expect(res.status).to.be.equal(200);
    expect(res.body[0][0].quantity).to.be.equal(5);
  })
  it('Veficiar que o status é 200 e quando realizar /sales/2', async () => {
    sinon.stub(connection, 'execute').resolves([[secondeSale]]);
    const res = await chai.request(app).get('/sales/2');
    expect(res.status).to.be.equal(200);
    expect(res.body[0][0].productId).to.be.equal(3);
  })

})