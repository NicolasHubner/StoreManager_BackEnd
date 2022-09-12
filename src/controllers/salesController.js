const express = require('express');
const salesValidation = require('../middlewares/salesValidation');
const salesService = require('../services/salesServices');

const router = express.Router();

router.post('/', salesValidation, async (req, res) => {
  const result = await salesService.add(req.body);
  res.status(201).json(result);
});

module.exports = router;