'use strict';

const fiveHundred = (req, res) => {
  res.status(500);
  res.send('<h1>Shootskies! We wrote some garbage code. Getting on it. Until then, make a cuppa and sit tight.</h1>');
  res.end();
}

module.exports = fiveHundred;
