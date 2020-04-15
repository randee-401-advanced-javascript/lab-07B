'use strict';

const express = require('express');
const router = express.Router();
const schema = require('../models/products-schema.js');
const Model = require('../models/model.js')

const ProductsModel = new Model(schema)



router.get('/', (req, res, next) => {
  
})







module.exports = router;
