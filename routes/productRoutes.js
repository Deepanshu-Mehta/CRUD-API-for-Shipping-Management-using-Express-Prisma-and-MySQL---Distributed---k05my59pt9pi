const express = require('express');
const { createShipping, cancelShipping, retrieve } = require('../controller/productController');

const productRoute = express.Router();

productRoute.post('/create', createShipping);
productRoute.put('/cancel', cancelShipping);
productRoute.get('/get', retrieve);
// productRoute.get('/get/:userId')

module.exports = productRoute;