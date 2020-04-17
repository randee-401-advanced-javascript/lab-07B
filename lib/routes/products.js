'use strict';

const express = require('express');
const router = express.Router();
const schema = require('../models/products-schema.js');
const Model = require('../models/model.js')

const ProductsModel = new Model(schema)


router.get('/', async (req, res, next) => {
  let results = await ProductsModel.readByQuery({});
  res.send(results);
})

router.get('/:id', async (req, res, next) => {
  let record = await ProductsModel.read(req.params.id);
  res.send(record);
})

router.post('/', async (req, res) => {
  let newPro = await ProductsModel.create(req.body);

  res.status(201);
  res.send(newPro);
})

router.put('/:id', async (req, res, next) => {
  console.log('-------------------');
  console.log(req.params.id);
  console.log(req.body);
  let updateThis = await ProductsModel.update(req.params.id, req.body);
  res.status(200);
  res.send(updateThis);
})

router.delete('/:id', async (req,res, next) => {
  let deleteThis = await ProductsModel.deleteOne(req.params.id);
  res.status(200);
  res.send(`Deleted ${req.params.id}  Nailed it.`)

})






module.exports = router;
