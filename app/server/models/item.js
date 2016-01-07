var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
  item: {type: String, required: true},
  price: {type: Number, required: true},
  desc: {type: String},
  amt: {type: Number, required: true},
  isIn: {type: Boolean, required: true},
  img: {type: String},
  dates: [{type: Number}]
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;