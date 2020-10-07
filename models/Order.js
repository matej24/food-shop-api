const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
  orderedFood: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Order', OrderSchema);
