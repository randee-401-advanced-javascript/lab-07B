'use strict';

require('dotenv').config();


const app = require('./lib/server.js');
const cors = require('cors');
const PORT = process.env.PORT;
const mongodb = process.env.MONGODB_URI

app.use(cors);
app.start(PORT, mongodb);

