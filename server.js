const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes=require('./routes/authroutes');
const profileRoutes = require('./routes/profileRoute');
const routes = require("./routes/foodSystemRoute");
const restaurantProduc = require("./routes/restaurantProductRoute");
const categorieRestaurantProduct = require('./routes/categorieRestaurantProductRoutes');



dotenv.config();
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: { origin: "*" }
});

// Attach Socket.IO to app
app.set('io', io);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected')
  })
  .catch((err) => {
    console.log('Mongo Error:', err)}
);

app.use('/api',profileRoutes);
app.use('/api',authRoutes);
app.use('/api',routes);
app.use('/api',restaurantProduc);
app.use('/api',categorieRestaurantProduct);



// Socket.IO connection
io.on('connection', (socket) => {
  console.log(' Socket connected:', socket.id);

  socket.on('disconnect', () => {
    console.log(' Socket disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 server running on port ${PORT}`)
});



