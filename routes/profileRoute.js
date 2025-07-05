const express = require('express');
const router = express.Router();
const {upsertAboutUs,getAboutUs} = require('../controllers/aboutUsController');
const orderControler = require('../controllers/orderControler');
const {createItem,searchItems} = require('../controllers/searchController');
const {
  createNotification,
  getAllNotifications,
  markAsRead,
  deleteNotification
} = require('../controllers/notificationController');





//aboutUs
router.post('/about-us', upsertAboutUs);  
router.get('/about-us', getAboutUs); 
  


//order route
router.post('/orders', orderControler.createOrder);
router.get('/orders/:userId/history', orderControler.getOrderHistory);


//search route
router.post('/search', createItem);     // Add item
router.get('/search', searchItems); // Search


//notification route
router.post('/notification', createNotification);
router.get('/notification', getAllNotifications);
router.put('/notification/read/:id', markAsRead);
router.delete('/notification/:id', deleteNotification);




module.exports = router;
