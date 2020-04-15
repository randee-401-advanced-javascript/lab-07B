'use strict';

const express = require('express');
const whosGotSwagger = require('../docs/swagger.js');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const proRoute = require('./routes/products.js');
const catRoute = require('./routes/categories.js');

const app = express();
whosGotSwagger(app);
app.use(cors());
app.use(morgan('dev'));


app.use('/produce', proRoute);
app.use('/categories', catRoute);


//I don't think these are needed
let data = require('../db.json')
const fiveHundred = require('./middleware/500.js');
const notFound = require('./middleware/404.js');
app.use(express.json());


// --------- This starts the server and connects to mongoose -------
const startServer = (port, mongodb) => {
  console.log(mongodb)
  let options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
  mongoose.connect(mongodb, options);

  app.listen(port, () => {
    console.log('Server is up and running on ' + port + '. Holy Moly!')
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




// ---- These two line
app.use('/products', proRoute);
app.use('/catagories', catRoute);







app.use('*', notFound);

module.exports = {
  server: app,
  start: startServer
};
