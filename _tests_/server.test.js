'use strict';

const app = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');

const mocRequest = supergoose(app.server);

