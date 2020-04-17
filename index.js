'use strict';

require('dotenv').config();


const app = require('./lib/server.js');
const PORT = process.env.PORT;
const mongodb = process.env.MONGODB_URI

app.start(PORT, mongodb);

