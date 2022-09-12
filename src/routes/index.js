const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');
// const salesController = require('../controllers/salesController');

router.use('/products', productController);
// router.use('/sales', salesController);

module.exports = router;