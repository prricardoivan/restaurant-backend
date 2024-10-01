const { createOrder } = require('../models/ordersModel');

exports.createOrder = async (req, res) => {
  try {
    const orderData = req.body;
    const result = await createOrder(orderData);
    res.status(200).json({ message: 'Orden creada', order: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la orden' });
  }
};
