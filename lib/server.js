'use strict';

const express = require('express');
const app = express();

const startServer = (port) => {
  app.listen(port, () => {
    console.log('Server is up and running. Holy Moly!')
  })
}


app.get('/', (req, res) => {
  res.send('<h1>Hello you!</h1>')
})



module.exports = {
  server: app,
  start: startServer
};
