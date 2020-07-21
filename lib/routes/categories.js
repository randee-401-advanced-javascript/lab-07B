'use strict';

const express = require('express');
const router = express.Router();
const schema = require('../models/categories-schema.js');
const Model = require('../models/model.js')

const CategoryModel = new Model(schema);




router.get('/', async (req, res, next) => {
  let results = await CategoryModel.readByQuery({});
  res.send(results);
})

router.get('/:id', async (req, res, next) => {
  let record = await CategoryModel.read(req.params.id);
  res.send(record);
})

router.post('/', async (req, res) => {
  let newCat = await CategoryModel.create(req.body);

  res.status(201);
  res.send(newCat);
})



module.exports = router;