const saleById = [
  {
    date: "2022-09-12T23:44:01.000Z",
    productId: 3,
    quantity: 15,
  },
]

const insertId3 = { insertId: 3 }
const insertSale = [
  {
    "productId": 1,
    "quantity": 2
  }
]
const resultInsert = {
  id: 3,
  itemsSold: [
    {
      "productId": 1,
      "quantity": 2
    },
  ]
}
const getAllResults = [
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

const saleId2 = [
  {
    "date": "2022-09-14T14:31:06.000Z",
    "productId": 3,
    "quantity": 15
  }
]
module.exports = {
  saleById,
  insertId3,
  insertSale,
  resultInsert,
  getAllResults,
  saleId2
};
