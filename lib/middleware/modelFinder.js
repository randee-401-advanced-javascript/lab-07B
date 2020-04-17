'use strict';

const proSchema = require('../models/products-schema.js');
const catSchema = require('../models/categories-schema.js');
const Model = require('../models/model.js');

const modelFinder = (req, res, next) => {
  console.log('found model', req.params.model);

  switch(req.params.model) {
    case 'products':
      req.collectionModel = new Model(proSchema);
      break;
    case 'categories':
      req.collectionModel = new Model(catSchema);
      break;
    default:
      res.status(404);
      res.end();
      break; 
  }
};

module.exports = modelFinder