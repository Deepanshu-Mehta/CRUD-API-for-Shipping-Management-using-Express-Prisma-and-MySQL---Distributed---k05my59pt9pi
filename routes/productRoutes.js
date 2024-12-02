const express = require('express');
const { createShipping, cancelShipping, retrieve } = require('../controller/productController');
const verifySecret = require('../middleware/verifySecret');

const productRoute = express.Router();

productRoute.post('/create',verifySecret, createShipping);
productRoute.put('/cancel',verifySecret, cancelShipping);
productRoute.get('/get',verifySecret, retrieve);
// productRoute.get('/get/:userId')

module.exports = productRoute;