'use strict';

const notFound = (req, res) => {
  res.status(404);
  res.send('<h1>Shootskies! You need a map. What you are looking for does not exist here.</h1>')
  res.end();
}

module.exports = notFound;
