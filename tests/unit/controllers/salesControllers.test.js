const chai = require('chai');
const server = require('../../../src/server')
const { expect } = chai;

// chai.use(chaiHttp);

describe('Testando Sales', () => {
  it('Testando /get da página sales  e seu output', async () => {
    const output = [
      {
        "saleId": 1,
        "date": "2022-09-13T20:09:30.000Z",
        "productId": 2,
        "quantity": 10
      },
      {
        "saleId": 1,
        "date": "2022-09-13T20:09:30.000Z",
        "productId": 1,
        "quantity": 5
      },
      {
        "saleId": 2,
        "date": "2022-09-13T20:09:30.000Z",
        "productId": 3,
        "quantity": 15
      }
    ]
    const response = await chai.request(server).get('/sales');
    expect(response.body).to.deep.equal(output);

  });
});