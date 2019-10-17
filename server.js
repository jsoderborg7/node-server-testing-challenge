const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const FriendRouter = require('./friends/friends-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/friends', FriendRouter);

module.exports = server;