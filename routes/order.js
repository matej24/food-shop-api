const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// GETS ALL THE POSTS
router.get('/', async (req, res) => {
  try {
    const order = await Order.find();
    res.json(order);
  } catch (err) {
    res.json({ message: err });
  }
});

//SUBMIT A POST
router.post('/', async (req, res) => {
  const order = new Order({
    orderedFood: req.body.orderedFood,
    totalPrice: req.body.totalPrice,
    time: req.body.time,
  });

  try {
    const savedOrder = await order.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
