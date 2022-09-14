const chai = require("chai");
const sinon = require("sinon");
const chaiHttp = require('chai-http');

const { expect } = chai;
chai.use(chaiHttp);

const app = require('../../../src/app');
const connection = require("../../../src/db");

const productService = require('../../../src/services/productServices');
const productController = require('../../../src/controllers/productController');

const { productList, productPost } = require('./mocks/product.mocks');

describe('Teste do Product Controlle', async () => {
  afterEach(() => connection.execute.restore());

  it('Buscando todos os produtos', async () => {
    sinon.stub(connection, 'execute').onFirstCall().resolves([productList]);
    const res = await chai.request(app).get('/products').send();
    expect(res.status).to.be.equal(200);
  })
  it('Buscando o produto na rota product/2 e esperar status 200', async () => {
    sinon.stub(connection, 'execute').onFirstCall().resolves([[productList[1]]]);
    const res = await chai.request(app).get('/products/2').send();
    // console.log(res);
    expect(res.status).to.be.equal(200);
    expect(res.body.name).to.be.equal('Traje de encolhimento');
  })
  it('Realizar um post recebendo status 201 e resposta ZenFoneWatchDoTamir', async () => {
    sinon.stub(connection, 'execute').onFirstCall().resolves([[productPost]]);
    const res = await chai.request(app).post('/products').send({ name: 'ZenFoneWatchDoTamir'});
    // console.log(res);
    expect(res.status).to.be.equal(201);
    expect(res.body.name).to.be.equal('ZenFoneWatchDoTamir')
  })
 })