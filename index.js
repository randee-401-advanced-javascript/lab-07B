'use strict';


const app = require('./lib/server.js');
const PORT = process.env.PORT || 3000;


app.start(PORT);

