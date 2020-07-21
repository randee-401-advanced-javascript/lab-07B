'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {type: 'String', required: true},
  category: {type: 'String', required: false},
  price: {type: 'string', required: false},
  inStock: {type: number, require: false}
})

const model = mongoose.model('products', schema);

module.exports = model;