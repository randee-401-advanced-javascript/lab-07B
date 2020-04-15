'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {type: 'String', required: true},
  category: {type: 'String', required: false}
})

const model = mongoose.model('products', schema);

module.exports = model;