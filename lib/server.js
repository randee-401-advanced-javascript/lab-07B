'use strict';

const express = require('express');
const whosGotSwagger = require('../docs/swagger.js');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const modelRouter = require('./routes/model-routes.js');
// const modelFinder = require('./middleware/model-finder.js');

const app = express();
whosGotSwagger(app);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
// app.use(modelFinder);





const notFound = require('./middleware/404.js');


// --------- This starts the server and connects to mongoose -------
const startServer = (port, mongodb) => {
  console.log(mongodb)
  let options = {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
  mongoose.connect(mongodb, options);

  app.listen(port, () => {
    console.log('Server is up and running on ' + port + '. Holy Moly!')
  })
}


/**
 * this route gives a standard Homepage message
 * @route GET /
 * @returns {object} 200 - the HTML to show on the homepage
 */

app.get('/', (req, res) => {
  res.send('<h1>Hello you!</h1>')
})

// ---- This route gives access to Product or Categories 
app.use('/api/v1', modelRouter);




app.use('*', notFound);

module.exports = {
  server: app,
  start: startServer
};
