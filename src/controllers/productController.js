const express = require('express');
const productService = require('../services/productServices');
const productValidation = require('../middlewares/productsValidation');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [rows] = await productService.getAll();
    res.status(200).json(rows);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [row] = await productService.getAll(id);
    res.status(200).json(row);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.post('/', productValidation, async (req, res) => {
  console.log('body', req.body.name);

  try {
    const result = await productService.add(req.body);
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(err.status).json({ message: err.message });
  }
});
module.exports = router;