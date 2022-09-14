const resultServiceId = {
  "date": "2022-09-14T14:31:06.000Z",
  "productId": 3,
  "quantity": 15
}

const resultAllSales = [
  {
    "saleId": 1,
    "date": "2022-09-14T14:31:06.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "saleId": 1,
    "date": "2022-09-14T14:31:06.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2022-09-14T14:31:06.000Z",
    "productId": 3,
    "quantity": 15
  }
]
const insertionOneSale = [
  {
    "productId": 2,
    "quantity": 10
  }
]
const resultInsertionOneSale = {
  "id": 3,
  "itemsSold": [
    {
      "productId": 2,
      "quantity": 10
    }
  ]
}
const messageError = {
  message: 'Product not found'
}
const errorSale = [
  {
    "productId": 2,
    "quantity": 10
  }
]
module.exports = {
  resultServiceId,
  resultAllSales,
  insertionOneSale,
  resultInsertionOneSale,
  messageError,
  errorSale
}