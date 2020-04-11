'use strict';

const express = require('express');
const app = express();
let data = require('../db.json')
const timestamp = require('./middleware/timestamp.js')
const notFound = require('./middleware/404.js');
const fiveHundred = require('./middleware/500.js');
const logger = require('./middleware/logger.js');
const youveGotSwagger = require('../docs/swagger.js');


app.use(express.json());
youveGotSwagger(app);
// app.use(timestamp);
// app.use(logger);



const startServer = (port) => {
  app.listen(port, () => {
    console.log('Server is up and running. Holy Moly!')
  })
}

/**
 * this rout gives a standard Homepage message
 * @route GET /
 * @returns {object} 200 - the HTML to show on the homepage
 */

app.get('/', (req, res) => {
  res.send('<h1>Hello you!</h1>')
})

/**
 * This route allows us to post to the products collection
 * @route POST /products
 * @group products
 * @returns {object} 200 The new object added to the products collection
 */

app.post('/products', (req, res) => {
  let newProduct = req.body;
  newProduct.id = data.products.length + 1;
  data.products.push(newProduct);
  res.status(201);
  res.send(newProduct);
})

/**
 * This route gives us all the products collection
 * @route GET /categories
 * @group products
 * @returns {array} 200 - list of records that are in the products collection
 */

app.get('/products', (req, res) => {
  // console.log(data);
  res.send(data.products);
})

/**
 * This route allows you to update a product
 * @route PUT /products/:_id
 * @group products
 * @param {Number} id.params.require - the id of the field you would like to update
 * @returns {object} 200 - The updated object
 * @returns {Error} - If there was an issue updating in the DB
 */

app.put('/products/:id', (req, res) => {
  data.products[parseInt(req.params.id) -1] = {
    ...req.body,
    id: parseInt(req.params.id),
  }
  res.send(data.products[parseInt(req.params.id) -1 ]);
})

/**
 * This route allows you to update a product
 * @route DELETE /products/:_id
 * @group products
 * @param {Number} id.params.require - the id of the field you would like to update
 * @returns {array} 200 - The updated array without the deleted product
 * @returns {Error} - If there was an issue updating in the DB
 */

app.delete('/products/:id', (req, res) => {
 let deleteThis = data.products
  data.products = deleteThis.filter((val) => {
    if (val.id === parseInt(req.params.id)) return false;
    else return true;
  })
  res.send(data.products);
})

/**
 * This route allows us to post to the categories collection
 * @route POST /products
 * @group categories 
 * @returns {object} 200 The new object added to the categories collection
 */

app.post('/categories', (req, res) => {
  let newCat = req.body;
  newCat.id = data.categories.length + 1;
  data.categories.push(newCat);
  res.status(201);
  res.send(newCat);
})

/**
 * This route gives us all the categories collection
 * @route GET /categories
 * @group categories
 * @returns {array} 200 - list of records that are in the categories collection
 */

app.get('/categories', (req, res) => {
  res.send(data.categories);
})

/**
 * This route allows you to update a category 
 * @route PUT /categories/:_id
 * @group categories
 * @param {Number} id.params.require - the id of the field you want to update
 * @returns {object} 200 - The updated object
 * @returns {Error} - If there was an issue updating in the DB
 */

app.put('/categories/:id', (req, res) => {
  data.categories[parseInt(req.params.id) -1] = {
    ...req.body,
    id: parseInt(req.params.id),
  }
  res.send(data.categories[parseInt(req.params.id) -1 ]);
})

/**
 * This route allows you to update a category
 * @route DELETE /categories/:_id
 * @group categories
 * @param {Number} id.params.require - the id of the field you want to update
 * @returns {array} 200 - The updated array without the deleted product
 * @returns {Error} - If there was an issue updating in the DB
 */

app.delete('/categories/:id', (req, res) => {
  let deleteThis = data.categories
  data.categories = deleteThis.filter((val) => {
    if (val.id === parseInt(req.params.id)) return false;
    else return true;
  })
  res.send(data.categories);
})

app.use('*', notFound);

module.exports = {
  server: app,
  start: startServer
};
