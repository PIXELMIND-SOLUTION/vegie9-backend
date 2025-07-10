const express = require('express');
const router = express.Router();
const {upsertAboutUs,getAboutUs} = require('../controllers/aboutUsController');
const {createProduct,getAllProducts,updateProduct,deleteProduct,createOrder,getOrderHistory,updateOrderStatus,deleteOrder,searchProducts} = require('../controllers/orderControler');
const {createNotification,getAllNotifications,markAsRead,deleteNotification} = require('../controllers/notificationController');





//aboutUs
router.post('/about-us', upsertAboutUs);  
router.get('/about-us', getAboutUs); 
  

//
// ✅ Product Routes
//
router.post('/products', createProduct);             // Create Product
router.get('/products', getAllProducts);             // Get All Products
router.put('/products/:productId', updateProduct);   // Update Product
router.delete('/products/:productId', deleteProduct);// Delete Product

//
// ✅ Order Routes
//
router.post('/orders', createOrder);                  // Create Order
router.get('/orders/:userId', getOrderHistory);       // Get Orders by User ID
router.put('/orders/:orderId', updateOrderStatus);         // ✏️ Update order status
router.delete('/orders/:orderId', deleteOrder);            // 🗑️ Delete order

//search route
router.get('/search', searchProducts); // Example: /search?name=apple&category=Fruits

 //notification route
router.post('/notification', createNotification);
router.get('/notification', getAllNotifications);
router.put('/notification/read/:id', markAsRead);
router.delete('/notification/:id', deleteNotification);



module.exports = router;
