const express = require('express');
const { createOrder } = require('../controllers/ordersController');
const router = express.Router();

// Ruta para crear una nueva orden
router.post('/orders', createOrder);

module.exports = router;
