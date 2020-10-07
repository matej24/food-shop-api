const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// GETS ALL FOOD
router.get('/', async (req, res) => {
  try {
    const food = await Food.find();
    res.json(food);
  } catch (err) {
    res.json({ message: err });
  }
});

//SUBMIT A FOOD
router.post('/', async (req, res) => {
  const food = new Food({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });

  try {
    const savedFood = await food.save();
    res.status(200).json(savedFood);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
