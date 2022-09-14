const express = require('express');
const salesValidation = require('../middlewares/salesValidation');
const salesService = require('../services/salesServices');

const router = express.Router();

router.post('/', salesValidation, async (req, res) => {
  try {
    await salesService.verifyId(req.body);
    const result = await salesService.add(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await salesService.getAll();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await salesService.getAll(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await salesService.deleteId(id);
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});
module.exports = router;