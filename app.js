
require('dotenv').config();

const ServerClass = require('./models/server');

const Server = new ServerClass();

Server.start();