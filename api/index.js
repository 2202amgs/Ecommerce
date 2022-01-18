const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

// import files
const userRoute = require('./route/user');
const authRoute = require('./route/auth');
const productRoute = require('./route/product');
const cartRoute = require('./route/cart');
const orderRoute = require('./route/order');
const stripeRoute = require('./route/stripe');


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('db connection successfull!'))
    .catch((error) => console.log('db not connection!'));


// use
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);

app.listen(process.env.PORT || 5000, () => { console.log('backend server is running!'); });