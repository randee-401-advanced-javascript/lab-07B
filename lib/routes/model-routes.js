'use strict';

//esoteric resources 
const express = require('express');
const router = express.Router();

//internal modules
const modelFinder = require('../middleware/modelFinder.js')

//middleware

router.param('model', modelFinder);

//ALL THE ROUTES MAPPED OUT

//Create a single instance
router.post('/:model', async (req, res, next) => {
  let results = await req.collectionModel.create(req.body);
  res.status(201);
  res.send(results);
})

//Read everything there is to read
router.get('/:model', async (req, res, next) => {
  let results = await req.collectionModel.readByQuery({});
  res.status(201);
  res.send(result);
})

//Read one particular thing there is to read
router.get('/:model/:id', async (req, res, next) => {
  let result = await req.collectionModel.read(req.params.id);
  res.status(200);
  res.send(result);
})

//Update a particular thing
router.put('/:model/:id', async (req, res, next) => {
  let updateThis = await req.collectionModel.update(req.params.id, req.body);
  res.status(200);
  res.send(updateThis);
})

//Delete a particular thing
router.delete('/:model/:id', async (req, res, next) => {
  let deleteThis = await req.collectionModel.delete(req.params.id);
  res.status(200);
  res.send('Deleted one thing! Hopefully...');
})


module.exports = router;