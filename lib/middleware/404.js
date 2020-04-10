'use strict';

const notFound = (req, res) => {
  res.status(404);
  res.send(res.send('<h1>Shootskies! You need a map. We can not find what you are looking for.</h1>'))
  res.end();
}

module.exports = notFound;
