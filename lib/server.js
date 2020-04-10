'use strict';

const express = require('express');
const app = express();
let data = require('../db.json')
const timestamp = require('./middleware/timestamp.js')
const notFound = require('./middleware/404.js');
const fiveHundred = require('./middleware/500.js');
const logger = require('./middleware/logger.js');


app.use(express.json());
app.use(timestamp);
app.use(logger);



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



app.post('/products', (req, res) => {
  let newProduct = req.body;
  newProduct.id = data.products.length + 1;
  data.products.push(newProduct);
  res.status(201);
  res.send(newProduct);
})

app.get('/products', (req, res) => {
  console.log(data);
  res.send(data.products);
})

/**
 * This route allows you to update a product
 * @route PUT /products/:_id
 * @group products
 * @param {Number} id.params.require - the ide of the field you want to update
 * @returns {object} 200 - The updated object
 * @returns {Error} - If there was an issue updating in the DB
 */

app.put('/products/:id', (req, res) => {
  data.products[parseInt(req.params.id) -1] = {
    ...req.body,
    id: parseInt(reg.params.id),
  }
  res.send(data.products[parseInt(reg.params.id) -1 ]);
})

// app.delete('/products/:id', (req, res) => {
//  let deleteThis = data.products[parseInt(req.params.id) -1 ]
//   app.delete(deleteThis);
// })

app.post('/categories', (req, res) => {
  let newCat = req.body;
  newCat.id = data.categories.length + 1;
  data.categories.push(newCat);
  res.status(201);
  res.send(newCat);
})

app.get('/categories', (req, res) => {
  res.send(data.categories);
})

app.put('/categories/:id', (req, res) => {
  data.categories[parseInt(req.params.id) -1] = {
    ...req.body,
    id: parseInt(reg.params.id),
  }
  res.send(data.categories[parseInt(reg.params.id) -1 ]);
})

// app.delete('/categories/:id', (req, res) => {
//   let deleteThis = data.catagories[parseInt(req.params.id) -1 ]
//   app.delete(deleteThis);
// })

app.use('*', notFound);

module.exports = {
  server: app,
  start: startServer
};
