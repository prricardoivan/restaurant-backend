const pool = require('../config/db');

// Ejemplo de una función que llama a un procedimiento almacenado para crear una orden
async function createOrder(orderData) {
  const [result] = await pool.execute('CALL sp_create_order(?, ?, ?)', [
    orderData.customer_id, 
    orderData.table_id, 
    orderData.total
  ]);
  return result;
}

module.exports = {
  createOrder,
};
