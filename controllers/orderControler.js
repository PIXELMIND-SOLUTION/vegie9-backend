const Order = require('../models/orderModel');

// Create Order
const createOrder = async (req, res) => {
  try {
    const { userId, items, totalAmount, status } = req.body;
    const order = await Order.create({ userId, items, totalAmount, status });
    res.status(201).json({ success: true, message: 'Order created', data: order });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating order', error: error.message });
  }
};

//Get Order History for a User
const getOrderHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId }).populate('items.productId');
    res.status(200).json({ success: true, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching order history', error: error.message });
  }
};

// Export functions separately
module.exports = {
  createOrder,
  getOrderHistory
};
